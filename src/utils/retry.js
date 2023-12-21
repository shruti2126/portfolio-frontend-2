/** @format */

export const retry = async (fn, retries, delay) => {
  try {
    return await fn(); // Attempt the request
  } catch (error) {
    if (retries > 0) {
      await new Promise((resolve) => setTimeout(resolve, delay)); // Wait for delay
      return retry(fn, retries - 1, delay); // Retry
    } else {
      throw error; // If out of retries, throw the error
    }
  }
};
