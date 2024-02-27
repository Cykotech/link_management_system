export async function getArmor() {
  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbxKP-yGhf7s9zWImE2dmc9hUA9k3i5SVV0vf-kiqlT6JBXAH26pBaZDRbxyDhkpOZU/exec?type=armor"
    );
    const json = await response.json();
    const armors = [];
    for (let i = 0; i < Object.keys(json).length; i++) {
      armors.push({
        name: json[i][0],
        imgSrc: json[i][1],
        set: json[i][2],
        upgrades: {
          level1: {
            [json[i][3]]: json[i][4],
            [json[i][5]]: json[i][6],
            [json[i][7]]: json[i][8],
          },
          level2: {
            [json[i][9]]: json[i][10],
            [json[i][11]]: json[i][12],
            [json[i][13]]: json[i][14],
          },
          level3: {
            [json[i][15]]: json[i][16],
            [json[i][17]]: json[i][18],
            [json[i][19]]: json[i][20],
          },
          level4: {
            [json[i][21]]: json[i][22],
            [json[i][23]]: json[i][24],
            [json[i][25]]: json[i][26],
          },
        }
      })
    }

    armors.forEach(armor => console.log(typeof armor.upgrades.level3.Sapphire));
  } catch (err) {
    console.log(err);
  }
}

getArmor();
