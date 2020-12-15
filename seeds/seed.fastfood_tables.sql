BEGIN;

TRUNCATE
  fastfood_creations,
  fastfood_items,
  fastfood_buns,
  fastfood_fillings,
  fastfood_sauces
  RESTART IDENTITY CASCADE;

INSERT INTO fastfood_buns (bun_name, bun_description)
VALUES
('innout_standard', 'In N Out'),
('burgerking_sesame', 'Burger King'),
('carlsjr_standard', 'Carls Jr'),
('jack_baconultimate', 'Jack in the Box Standard'),
('jack_crispychicken', 'null'),
('mcdonalds_artisan', 'McDonalds Artisan'),
('jack_sourdough', 'Jack in the Box Sourdough'),
('mcdonalds_mcgriddle', 'McDonalds McGriddle'),
('mcdonalds_mcmuffin', 'McDonalds McMuffin'),
('jack_butteryjack', 'Jack in the Box Buttery Jack'),
('mcdonalds_sesame', 'McDonalds Sesame'),
('mcdonalds_standard', 'McDonalds Standard'),
('wendys_standard', 'Wendys');

INSERT INTO fastfood_sauces (sauce_name, sauce_description)
VALUES
('innout_spread', 'In N Out Spread'),
('mcdonalds_bigmacsauce', 'Big Mac Sauce'),
('carlsjr_bigtwinsauce', 'Carls Jr Big Twin Sauce'),
('burgerking_whoppersauce', 'Whopper Sauce'),
('jack_secretsauce', 'Jacks Secret Sauce'),
('jack_tacosauce', 'Jacks Taco Sauce'),
('wendys_sawesomesauce', 'Wendys Sawesome Sauce');

INSERT INTO fastfood_fillings (filling_name, filling_description)
VALUES
('burgerking_chickenfries', 'Burger King Chicken Fries'),
('burgerking_baconking', 'Burger King Bacon King'),
('burgerking_doublecheeseburger', 'Burger King Double Cheeseburger'),
('innout_animalstylefries', 'In N Out Animal Style Fries'),
('burgerking_whopper', 'Burger King Whopper'),
('carlsjr_jalapenopopper', 'Carls Jr Jalapeno Poppers'),
('innout_doubledouble', 'In N Out Double Double'),
('burgerking_hersheyspie', 'Burger King Hersheys Sundae Pie'),
('carlsjr_doublewesternbacon', 'Carls Jr Double Western Bacon'),
('carlsjr_superstar', 'Carls Jr Super Star'),
('jack_curlyfries', 'Jack in the Box Curly Fries'),
('jack_baconswissbuttery', 'Jack in the Box Bacon and Swiss Buttery Jack'),
('innout_neopolitan', 'In n Out Neopolitan Milkshake'),
('jack_doubleultimatebacon', 'Jack in the Box Ultimate Bacon Cheeseburger'),
('jack_minitacos', 'Jack in the Box Tiny Tacos'),
('jack_sourdoughjack', 'Jack in the Box Sourdough Jack'),
('jack_spicychicken', 'Jack in the Box Spicy Chicken'),
('mcdonalds_bigmac', 'McDonalds Big Mac'),
('mcdonalds_crispychicken', 'McDonalds Buttermilk Crispy Chicken'),
('mcondalds_filetofish', 'McDonalds Filet o Fish'),
('mcdonalds_mcdouble', 'McDonalds McDouble'),
('mcdonalds_mcgriddle', 'McDonalds McGriddle'),
('mcdonalds_mcmuffin', 'McDonalds McMuffin'),
('mcdonalds_mcnuggets', 'McDonalds McNuggets'),
('wendys_davesdouble', 'Wendys Daves Double'),
('mcdonalds_mcrib', 'McDonalds McRib'),
('wendys_spicychicken', 'Wendys Spicy Chicken'),
('wendys_baconator', 'Wendys Baconator'),
('wendys_chili', 'Wendys Chili');

INSERT INTO fastfood_items (item_name, item_description, price, bun_id, filling_id)
VALUES
('burgerking_chickenfries', 'Burger King Chicken Fries', 6.79, null, 1),
('burgerking_baconking', 'Burger King Bacon King', 5.99, 2, 2),
('burgerking_doublecheeseburger', 'Burger King Double Cheeseburger', 1.69, 2, 3),
('innout_animalstylefries', 'In N Out Animal Style Fries', 3.4, null, 4),
('burgerking_whopper', 'Burger King Whopper', 4.19, 2, 5),
('carlsjr_jalapenopopper', 'Carls Jr Jalapeno Poppers', 2.99, null, 6),
('innout_doubledouble', 'In N Out Double Double', 3.45, 1, 7),
('burgerking_hersheyspie', 'Burger King Hersheys Sundae Pie', 1.69, null, 8),
('carlsjr_doublewesternbacon', 'Carls Jr Double Western Bacon', 6.49, 3, 9),
('carlsjr_superstar', 'Carls Jr Super Star', 5.99, 3, 10),
('jack_curlyfries', 'Jack in the Box Curly Fries', 1.99, null, 11),
('jack_baconswissbuttery', 'Jack in the Box Bacon and Swiss Buttery Jack', 5.09, 10, 12),
('innout_neopolitan', 'In n Out Neopolitan Milkshake', 2.1, null, 13),
('jack_doubleultimatebacon', 'Jack in the Box Ultimate Bacon Cheeseburger', 5.09, 4, 14),
('jack_minitacos', 'Jack in the Box Tiny Tacos', 3, null, 15),
('jack_sourdoughjack', 'Jack in the Box Sourdough Jack', 4.69, 7, 16),
('jack_spicychicken', 'Jack in the Box Spicy Chicken', 4.59, 4, 17),
('mcdonalds_bigmac', 'McDonalds Big Mac', 3.99, 11, 18),
('mcdonalds_crispychicken', 'McDonalds Buttermilk Crispy Chicken', 4.39, 6, 19),
('mcondalds_filetofish', 'McDonalds Filet o Fish', 3.79, 12, 20),
('mcdonalds_mcdouble', 'McDonalds McDouble', 1.39, 12, 21),
('mcdonalds_mcgriddle', 'McDonalds McGriddle', 3.29, 8, 22),
('mcdonalds_mcmuffin', 'McDonalds McMuffin', 2.79, 9, 23),
('mcdonalds_mcnuggets', 'McDonalds McNuggets', 4.49, null, 24),
('wendys_davesdouble', 'Wendys Daves Double', 5.19, 13, 25),
('mcdonalds_mcrib', 'McDonalds McRib', 3.69, null, 26),
('wendys_spicychicken', 'Wendys Spicy Chicken', 4.69, 13, 27),
('wendys_baconator', 'Wendys Baconator', 6.09, 13, 28),
('wendys_chili', 'Wendys Chili', 2.09, null, 29);

COMMIT;
