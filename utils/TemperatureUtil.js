import { TemperatureVO } from "../valueobjects/TemperatureVO";
/**
 * Converts a temperature to the unit to be converted
 * @param {TemperatureVO} temperature - Object that contains a value and a unit representing
 * @param {string} unit - The unit to convert. Valid values are CELSIUS and FARENHEIT.
 * @returns {TemperatureVO} - Object containing a value and unit representing the converted value.
 */

const TemperatureUtil = () => {
    function convert(temperature, unit){
        if (temperature.unit == "CELSIUS" && unit == "FARENHEIT"){
            let convertedValue = (temperature.value * 9/5) + 32;
            return new TemperatureVO(convertedValue, unit);
        } else if (temperature.unit == "FARENHEIT" && unit == "CELSIUS"){
            let convertedValue = (temperature.value - 32) * 5/9;
            return new TemperatureVO(convertedValue, unit);
        } else {
            return new TemperatureVO(temperature.value, unit)
        }
    }

    return { convert }
}

export default TemperatureUtil;  