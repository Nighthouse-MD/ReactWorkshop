const RecipeApi = {
    get(foodName) {
        return new Promise(function (resolve) {
            // A mock async action using setTimeout
            setTimeout(function () {
                resolve({
                    data:
                        [
                            {
                                name: 'Banana Pie with ' + foodName,
                                ingredients: ['Banana', 'flour', 'sugar'],
                                text: 'These bacon burgers can be grilled, pan-grilled, broiled, or baked. Simple seasonings and diced bacon make these burgers juicy and delicious. An egg and some fresh breadcrumbs supplement the ground beef mixture, but if you prefer all meat burgers, skip the egg and bread crumbs and use about 2 pounds of ground beef. Finely diced bacon gives the burgers a bit of smoky flavor and adds juiciness. The burgers are flavored with simple seasonings along with chopped onion and Worcestershire sauce. Use ground chuck, or a meat to fat ratio of 85/15 for the juiciest, most flavorful burgers. ',
                                imageUrl: 'https://www.seriouseats.com/recipes/images/2012/01/02012-185998-banana-cream-pie-610x458-1.jpg'
                            },
                            {
                                name: 'Tuna Salad with ' + foodName,
                                ingredients: ['tuna', 'letuce', 'tomato', 'olive oil'],
                                text: 'These bacon burgers can be grilled, pan-grilled, broiled, or baked. Simple seasonings and diced bacon make these burgers juicy and delicious. An egg and some fresh breadcrumbs supplement the ground beef mixture, but if you prefer all meat burgers, skip the egg and bread crumbs and use about 2 pounds of ground beef. Finely diced bacon gives the burgers a bit of smoky flavor and adds juiciness. The burgers are flavored with simple seasonings along with chopped onion and Worcestershire sauce. Use ground chuck, or a meat to fat ratio of 85/15 for the juiciest, most flavorful burgers. Serve the burgers on soft burger buns or slider buns (toasted or not). For toppings, consider tomatoes, cooked bacon strips, slices of cheese, lettuce, onions, dill pickle slices, or pickled jalapeño pepper rings. See the tips and variations for a variety of homemade spreads and toppings.',
                                imageUrl: 'https://img.taste.com.au/1jAOXAA_/w720-h480-cfill-q80/taste/2016/11/mediterranean-tuna-salad-31059-1.jpeg'
                            },
                            {
                                name: 'Lemon Chicken with ' + foodName,
                                ingredients: ['chicken', 'lemon', 'herbs'],
                                text: 'These bacon burgers can be grilled, pan-grilled, broiled, or baked. Simple seasonings and diced bacon make these burgers juicy and delicious. An egg and some fresh breadcrumbs supplement the ground beef mixture, but if you prefer all meat burgers, skip the egg and bread crumbs and use about 2 pounds of ground beef. Finely diced bacon gives the burgers a bit of smoky flavor and adds juiciness. The burgers are flavored with simple seasonings along with chopped onion and Worcestershire sauce. Use ground chuck, or a meat to fat ratio of 85/15 for the juiciest, most flavorful burgers. Serve the burgers on soft burger buns or slider buns (toasted or not). For toppings, consider tomatoes, cooked bacon strips, slices of cheese, lettuce, onions, dill pickle slices, or pickled jalapeño pepper rings. See the tips and variations for a variety of homemade spreads and toppings.',
                                imageUrl: 'https://hips.hearstapps.com/del.h-cdn.co/assets/16/06/1600x1066/gallery-1455309017-delish-chicken-piccata-2.jpg'
                            },
                            {
                                name: 'Bacon Burger with ' + foodName,
                                ingredients: ['minced meat', 'bacon', 'tomato', 'letuce', 'bun'],
                                text: 'These bacon burgers can be grilled, pan-grilled, broiled, or baked. Simple seasonings and diced bacon make these burgers juicy and delicious. An egg and some fresh breadcrumbs supplement the ground beef mixture, but if you prefer all meat burgers, skip the egg and bread crumbs and use about 2 pounds of ground beef. Finely diced bacon gives the burgers a bit of smoky flavor and adds juiciness. The burgers are flavored with simple seasonings along with chopped onion and Worcestershire sauce. Use ground chuck, or a meat to fat ratio of 85/15 for the juiciest, most flavorful burgers. Serve the burgers on soft burger buns or slider buns (toasted or not). For toppings, consider tomatoes, cooked bacon strips, slices of cheese, lettuce, onions, dill pickle slices, or pickled jalapeño pepper rings. See the tips and variations for a variety of homemade spreads and toppings.',
                                imageUrl: 'https://static.olocdn.net/menu/applebees/ffac757fc64d1e414422bf204f1a4f87.jpg'
                            }
                        ]
                });
            }, 3000);
        });
    },
    getRandom() {
        return new Promise(function (resolve) {
            // A mock async action using setTimeout
            setTimeout(function () {
                resolve({
                    data:
                        [
                            {
                                name: 'Bacon Burger',
                                ingredients: ['minced meat', 'bacon', 'tomato', 'letuce', 'bun'],
                                text: 'These bacon burgers can be grilled, pan-grilled, broiled, or baked. Simple seasonings and diced bacon make these burgers juicy and delicious. An egg and some fresh breadcrumbs supplement the ground beef mixture, but if you prefer all meat burgers, skip the egg and bread crumbs and use about 2 pounds of ground beef. Finely diced bacon gives the burgers a bit of smoky flavor and adds juiciness. The burgers are flavored with simple seasonings along with chopped onion and Worcestershire sauce. Use ground chuck, or a meat to fat ratio of 85/15 for the juiciest, most flavorful burgers. ',
                                imageUrl: 'https://static.olocdn.net/menu/applebees/ffac757fc64d1e414422bf204f1a4f87.jpg'
                            },
                            {
                                name: 'Lemon Chicken',
                                ingredients: ['chicken', 'lemon', 'herbs'],
                                text: 'These bacon burgers can be grilled, pan-grilled, broiled, or baked. Simple seasonings and diced bacon make these burgers juicy and delicious. An egg and some fresh breadcrumbs supplement the ground beef mixture, but if you prefer all meat burgers, skip the egg and bread crumbs and use about 2 pounds of ground beef. Finely diced bacon gives the burgers a bit of smoky flavor and adds juiciness. The burgers are flavored with simple seasonings along with chopped onion and Worcestershire sauce. Use ground chuck, or a meat to fat ratio of 85/15 for the juiciest, most flavorful burgers. ',
                                imageUrl: 'https://hips.hearstapps.com/del.h-cdn.co/assets/16/06/1600x1066/gallery-1455309017-delish-chicken-piccata-2.jpg'
                            },
                            {
                                name: 'Tuna Salad',
                                ingredients: ['tuna', 'letuce', 'tomato', 'olive oil'],
                                text: 'These bacon burgers can be grilled, pan-grilled, broiled, or baked. Simple seasonings and diced bacon make these burgers juicy and delicious. An egg and some fresh breadcrumbs supplement the ground beef mixture, but if you prefer all meat burgers, skip the egg and bread crumbs and use about 2 pounds of ground beef. Finely diced bacon gives the burgers a bit of smoky flavor and adds juiciness. The burgers are flavored with simple seasonings along with chopped onion and Worcestershire sauce. Use ground chuck, or a meat to fat ratio of 85/15 for the juiciest, most flavorful burgers. ',
                                imageUrl: 'https://img.taste.com.au/1jAOXAA_/w720-h480-cfill-q80/taste/2016/11/mediterranean-tuna-salad-31059-1.jpeg'
                            }
                        ]
                });
            }, 3000);
        });
    }
}

export default RecipeApi;
