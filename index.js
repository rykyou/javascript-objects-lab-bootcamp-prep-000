var recipes = {ingredient: "amount"}

function updateObjectWithKeyAndValue(object, key, value) {
  updatedObject = Object.assign({}, object, {[key]: value})
  return updatedObject;
}