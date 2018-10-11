import React from "react";
import expect from "expect";
import { shallow } from "enzyme";
import { spy, stub } from "sinon";
import RecipeApi from '../recipeApi';

import Fridge from "./Fridge";

describe('<Fridge />', () => {

    let getRandomStub;

    getRandomStub = stub(RecipeApi, "getRandom").returns(
        new Promise(function (resolve) {
            // A mock async action using setTimeout
            setTimeout(function () {
                resolve({
                    data: [{
                        name: 'Bacon Burger',
                        ingredients: ['minced meat', 'bacon', 'tomato', 'letuce', 'bun'],
                        text: 'These bacon burgers can be grilled, pan-grilled, broiled, or baked. Simple seasonings and diced bacon make these burgers juicy and delicious. An egg and some fresh breadcrumbs supplement the ground beef mixture, but if you prefer all meat burgers, skip the egg and bread crumbs and use about 2 pounds of ground beef. Finely diced bacon gives the burgers a bit of smoky flavor and adds juiciness. The burgers are flavored with simple seasonings along with chopped onion and Worcestershire sauce. Use ground chuck, or a meat to fat ratio of 85/15 for the juiciest, most flavorful burgers. ',
                        imageUrl: 'https://static.olocdn.net/menu/applebees/ffac757fc64d1e414422bf204f1a4f87.jpg'
                    }]
                });
            }, 0);
        })
    );

    const wrapper = shallow(<Fridge />);

    it('should render Fridge items', () => {
        expect(wrapper.find('Row').length).toBe(3);
        expect(wrapper.find('AddFood').length).toBe(1);
    });

    it('should have called getRandom once', () => {
        expect(getRandomStub.callCount).toBe(1);
    });
});