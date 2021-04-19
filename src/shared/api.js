import config from "./config";

export const getReservationsPerDay = async () => {
	return fetch(config.BASE_PATH.concat(config.endpoints.BAR_CHART), {
		headers: {
			"X-API-Key": "15f58e60"
		}
	})
		.then(value => value.json())
}

export const getCarQuantityPerModel = async () => {
	return fetch(config.BASE_PATH.concat(config.endpoints.PIE_CHART), {
		headers: {
			"X-API-Key": "15f58e60"
		}
	})
		.then(value => value.json())
}