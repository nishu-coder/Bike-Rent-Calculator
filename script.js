/**
 * Calculates the total return cost for a bike rental.
 * @param {object} formData An object containing the form data.
 * @param {number} formData.startOdometer The starting odometer reading.
 * @param {number} formData.endOdometer The ending odometer reading.
 * @param {boolean} formData.raincoat Whether a raincoat was rented.
 * @param {boolean} formData.helmet Whether a helmet was rented.
 * @param {number} formData.timeDifference The time difference in hours.
 * @return {object} An object containing the calculated costs.
 */
function calculateTotal(formData) {
  const deposited = 2500;

  // Input validation and sanitization
  const startOdometer = parseFloat(formData.startOdometer) || 0;
  const endOdometer = parseFloat(formData.endOdometer) || 0;
  const raincoat = formData.raincoat || false; // Default to false if not provided
  const helmet = formData.helmet || false;     // Default to false if not provided
  const timeDifference = parseFloat(formData.timeDifference) || 0;

  // Calculations
  const distance = endOdometer - startOdometer;
  const petrolCost = 2.7 * distance;

  const extraKm = distance > 150 ? distance - 150 : 0;
  const limitExceedCost = distance > 150 ? extraKm * 5 : 0;

  const timingExceedCost = timeDifference * 69;

  const raincoatCost = raincoat ? 50 : 0;
  const helmetCost = helmet ? 50 : 0;

  const totalReturnCost = deposited - (timingExceedCost + limitExceedCost + raincoatCost + helmetCost + petrolCost);
  const withoutPetrolCost = deposited - (timingExceedCost + limitExceedCost + raincoatCost + helmetCost);

  return {
    distance: distance.toFixed(2),
    petrolCost: "₹" + petrolCost.toFixed(2),
    extraKm: extraKm.toFixed(2),
    limitExceedCost: "₹" + limitExceedCost.toFixed(2),
    timeDifference: timeDifference.toFixed(2),
    timingExceedCost: "₹" + timingExceedCost.toFixed(2),
    totalReturnCost: "₹" + totalReturnCost.toFixed(2),
    withoutPetrolCost: "₹" + withoutPetrolCost.toFixed(2),
  };
}
