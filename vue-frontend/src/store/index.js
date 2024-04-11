export default {
    namespaced: true,
    state: {
      step: null,
      headerStatus: true, // хедер
      color: {
        catalog: '#D1C1FF',
        favourites: '#FFFFFF',
        busket: '#FFFFFF',
      },
      container: {
        containerCatalog: null
      },
      userId: null,
      busketStatus: true
    },
    actions: {
        setStep: ({ commit }, payload) => commit('SET_STEP', payload),
        setHeaderStatus: ({ commit }, payload) => commit('SET_HEADER_STATUS', payload),
        setCatalog: ({ commit }, payload) => commit('SET_CATALOG', payload),
        setFavourites: ({ commit }, payload) => commit('SET_FAVOURITES', payload),
        setBusket: ({ commit }, payload) => commit('SET_BUSKET', payload),
        setContainerCatalog: ({ commit }, payload) => commit('SET_CONTAINER_CATALOG', payload),
        setUserId: ({ commit }, payload) => commit('SET_USER_ID', payload),
        setBusketStatus: ({ commit }, payload) => commit('SET_BUSKET_STATUS', payload)
    },
    mutations: {
        SET_STEP: (state, payload) => { state.step = payload.data },
        SET_HEADER_STATUS: (state, payload) => { state.headerStatus = payload.data },
        SET_CATALOG: (state, payload) => { state.color.catalog = payload.data },
        SET_FAVOURITES: (state, payload) => { state.color.favourites = payload.data },
        SET_BUSKET: (state, payload) => { state.color.busket = payload.data },
        SET_HISTORY_COLOR: (state, payload) => { state.color.historyColor = payload.data },
        SET_PROFILE_COLOR: (state, payload) => { state.color.profileColor = payload.data },
        SET_CONTAINER_CATALOG: (state, payload) => { state.container.containerCatalog = payload.data },
        SET_USER_ID: (state, payload) => { state.userId = payload.data },
        SET_BUSKET_STATUS: (state, payload) => { state.busketStatus = payload.data }
    },
    getters: {
        getStep: state => state.step,
        getHeader: state => state.headerStatus,
        getCatalog: state => state.color.catalog,
        getFavourites: state => state.color.favourites,
        getBusket: state => state.color.busket,
        getHistoryColor: state => state.color.historyColor,
        getProfileColor: state => state.color.profileColor,
        getContainerCatalog: state => state.container.containerCatalog,
        getUserId: state => state.userId,
        getBusketStatus: state => state.busketStatus
    }
}