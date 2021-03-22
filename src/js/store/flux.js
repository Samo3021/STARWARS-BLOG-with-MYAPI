const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			peoples: [],

			planets: [],

			favorites: [
				// {
				// 	name: "samuel",
				// 	type: "people"
				// },
				// {
				// 	name: "favi",
				// 	type: "people"
				// }
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
                */

			loadPeople: async () => {
				const url = "https://3000-crimson-baboon-3drybsqc.ws-us03.gitpod.io/people/";
				const response = await fetch(url);
				const data = await response.json();
				console.log(data);
				setStore({ peoples: data });
			},
			loadPlanets: async () => {
				const url = "https://3000-crimson-baboon-3drybsqc.ws-us03.gitpod.io/planets/";
				const response = await fetch(url);
				const data = await response.json();
				setStore({ planets: data });
			},
			loadFavorites: () => {
				//me confunde esta sintaxis(si hace falta?)
				console.log("que hay", getStore());
				console.log("buscar id");

				fetch(`https://3000-crimson-baboon-3drybsqc.ws-us03.gitpod.io/user/favorites/{fav}`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + sessionStorage.getItem("u_token")
					}
				})
					.then(response => response.json())
					.then(data => setStore({ favorites: data }));
			},

			addFavorite: (name, type, id) => {
				const data = { object_id: id, name: name };

				fetch("https://3000-crimson-baboon-3drybsqc.ws-us03.gitpod.io/user/favorites", {
					method: "POST",
					// mode: "cors",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + sessionStorage.getItem("u_token")
					},
					body: JSON.stringify(data)
				})
					.then(response => response.json())
					.then(data => {
						console.log("Success:", data);
					})
					.catch(error => {
						console.error("Error:", error);
					});

				const store = getStore();
				let count = 0;
				store.favorites.map(each => {
					if (each.name == name) {
						count = 1;
					}
				});

				if (count == 0) {
					setStore({
						favorites: [
							...store.favorites,
							{
								name: name,
								type: type,
								id: id
							}
						]
					});
				}
			},
			deleteFavorite: id => {
				const data = { object_id: id, name: name }; //este dato hace falta?/lo que debo borrar es la id
				//me confunde esta sintaxis(si hace falta?), esa nueva forma me sirve?
				fetch(`https://3000-crimson-baboon-3drybsqc.ws-us03.gitpod.io/favorites/${id}`, {
					method: "DELETE",
					// mode: "cors",
					headers: {
						"Content-Type": "application/json", //hace falta esto?
						Authorization: "Bearer " + sessionStorage.getItem("u_token") //siento q eto no hace falta el Delete, solo es borrar
					},
					body: JSON.stringify(data)
				})
					.then(response => response.json())
					.then(data => {
						console.log("Success:", data);
					})
					.catch(error => {
						console.error("Error:", error);
					});

				const store = getStore();
				const newFavorites = store.favorites.filter((item, i) => i !== id);
				setStore({ favorites: newFavorites });
			},
			logout: () => {
				setStore({ favorites: [] });
			}
		}
	};
};

export default getState;
