import config from "./config";

export const getReservationsPerDay = async () => {
	return fetch(config.BASE_PATH.concat(config.endpoints.BAR_CHART), {
		headers: {
			"X-API-Key": config.API_KEY
		}
	})
		.then(value => value.json())
}

export const getCarQuantityPerModel = async () => {
	return fetch(config.BASE_PATH.concat(config.endpoints.PIE_CHART), {
		headers: {
			"X-API-Key": config.API_KEY
		}
	})
		.then(value => value.json())
}