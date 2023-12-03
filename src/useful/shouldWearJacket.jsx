export const shouldWearJacket = (temperature, minTemperature, maxTemperature) => {
    return temperature < 17 || minTemperature < 17 || maxTemperature < 17;
};
