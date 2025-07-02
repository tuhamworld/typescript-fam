type CMS = {
    name: string
    language: string
    developers: string
    // making year optional
    year?: number
}


let WordPress:CMS = {
    name: "WordPress",
    language: "PHP",
    developers: "Community contributors and WordPress Foundation",
    year: 2003
}

let Drupal:CMS = {
    name: "Drupal",
    language: "PHP, JavaScript",
    developers: "Drupal community",
}

const displayInfo= (CMS: any) => {
    console.log(`${CMS.name} is developed by ${CMS.developers} in ${CMS.language} language in ${CMS.year}`);
}


displayInfo(WordPress);
displayInfo(Drupal);