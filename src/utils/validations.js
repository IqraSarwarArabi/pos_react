export function validateNotEmpty(value) {
  return value.trim() !== "";
}

export function validatePositiveNumber(value) {
  const parsedValue = parseFloat(value);
  return !isNaN(parsedValue) && parsedValue > 0;
}

export function validateMinLength(value, minLength) {
  return value.length >= minLength;
}

export function validateValidUrl(value) {
  try {
    new URL(value);
    return true;
  } catch (error) {
    return false;
  }
}

export function validate(product) {
  let error = "";

  if (!validateNotEmpty(product.title)) {
    error += "Title cannot be empty.\n";
  }

  if (!validatePositiveNumber(product.price)) {
    error += "Price should be a positive number.\n";
  }

  if (!validateNotEmpty(product.description)) {
    error += "Description cannot be empty.\n";
  } else if (!validateMinLength(product.description, 10)) {
    error += "Description should have a minimum length of 10.\n";
  }

  if (!validateNotEmpty(product.category)) {
    error += "Category cannot be empty.\n";
  }

  if (!validateNotEmpty(product.image)) {
    error += "Image cannot be empty.\n";
  } else if (!validateValidUrl(product.image)) {
    error += "Image URL is not valid.\n";
  }

  return error;
}
