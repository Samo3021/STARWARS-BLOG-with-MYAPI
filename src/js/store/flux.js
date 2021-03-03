const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			peoples: [],

			planets: [],

			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
                */

			loadPeople: async () => {
				const url = "https://3000-cyan-ptarmigan-0gz2mubx.ws-us03.gitpod.io/people/";
				const response = await fetch(url);
				const data = await response.json();
				console.log(data);
				setStore({ peoples: data });
			},
			loadPlanets: async () => {
				const url = "https://3000-cyan-ptarmigan-0gz2mubx.ws-us03.gitpod.io/planets/";
				const response = await fetch(url);
				const data = await response.json();
				setStore({ planets: data });
			},

			addFavorite: (name, type) => {
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
								type: type
							}
						]
					});
				}
			},
			deleteFavorite: id => {
				const store = getStore();
				const newFavorites = store.favorites.filter((item, i) => i !== id);
				setStore({ favorites: newFavorites });
			}
		}
	};
};

export default getState;
