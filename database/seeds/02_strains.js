exports.seed = function (knex) {
  return knex("strains")
    .insert([
      {name: "24K Gold", description: "24K Gold, also known as 24K or Kosher Tangie, is a cross of Tangie and Kosher Kush, bred by DNA Genetics in Amsterdam. The seed bank has identified three 24K Gold phenotypes; one of which has a prominent kush flavor with citrus undertones, and another with a Tangie-leaning flavor. According to DNA Genetics, the strain has an Indica-leaning lineage, but grows tall and produces above-average yields (450 to 550 grams per square meter, or 0.99 to 1.12 pounds per square foot) of resinous buds in a 63-70 day flowering period. The breeder also claims that 24K Gold produces a strong tangerine scent and kush-flavored buds. 24K Gold won third Place at the Milano Secret Cup in 2018.", flavors: "Blueberry, Mango, Spicy/Herbal", effects: "Creative, Giggly, Relaxed, Hybrid"},
    ])
    .then(() => console.log("\n== Seed data for strains table added. ==\n"));
};
;
