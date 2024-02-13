export let materials = [];

async function getMaterials() {
  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbyhhom9KprzV3okaHvSp4It0RPRRJsCZWL-FhqRYJyhYxLxZzMjPKI8kjtDkUpIeGU/exec"
    );
    const json = await response.json();
    materials = json.data;
  } catch (err) {
    console.log(err);
  }
}

getMaterials();
