"use strict";


const util = require('util')
var log4js = require('log4js');
var logger = log4js.getLogger();

module.exports = {

        metadata: () => (
        {
            "name": "order_food",
            "properties": {
                "name": { "type": "string", "required": true },
                "actionType": { "type": "string", "required": true }
            },
            "supportedActions": [
                "fries",
                "salad",
                "baconator"
            ]
        }
    ),

    invoke: (conversation, done) => {
        const name = conversation.properties().name ? conversation.properties().name : '';
        
/*
        var fbPayload = {
            "payload": {
              "template_type": "list",
              "top_element_style": "compact",
              "elements": [
                
                {
                  "title": "Spicy Chicken Sandwich",
                  "subtitle": "with Drink and French Fries",
                  "image_url": "http://restaurantnews.com/wp-content/uploads/2013/01/Wendys-Fish-Fillet-Sandwich.jpg",          
                  "buttons": [
                        {
                        "type": "postback",
                        "title": "Add to Order",
                        "payload": "fries"
                        }
                    ]
                },

                {
                  "title": "Spicy Chicken Sandwich",
                  "subtitle": "with Drink and Baconator Fries",
                  "image_url": "http://3.bp.blogspot.com/-PbruE8wmwAI/VY1nPWsDvyI/AAAAAAAAn1A/h8mUy5zi0Ug/s1600/Wendys-Baconator-Fries.jpg",          
                  "buttons": [
                        {
                        "type": "postback",
                        "title": "Add to Order",
                        "payload": "baconator"
                        }
                    ]
                },
 
                {
                  "title": "Spicy Chicken Sandwich",
                  "subtitle": "with Drink and Garden Side Salad",
                  "image_url": "https://cdn1.dailyhealthpost.com/wp-content/uploads/2013-04-29-7-salads-worse-than-a-big-mac-wendy.jpg",          
                  "buttons": [
                        {
                        "type": "postback",
                        "title": "Add to Order",
                        "payload": "salad"
                        }
                    ]
                },
              ]
            }
          };

*/

/*
        var fbPayload = {
          "attachment":{
                "type":"template",
                "payload":{
                  "template_type":"generic",
                  "elements":[
                     {
                      "title":"Welcome to Peter\'s Hats",
                      "subtitle":"We\'ve got the right hat for everyone.",      
                    }
                  ]
                }
              }
        }
*/




      var fbPayload = {
            "attachment": {
              "type": "template",
              "payload": {
                "template_type": "list",
                "top_element_style": "compact",
                "elements": [


                {
                  "title": conversation.properties().name,
                  "subtitle": "with Drink and French Fries",
                  "image_url": "http://restaurantnews.com/wp-content/uploads/2013/01/Wendys-Fish-Fillet-Sandwich.jpg",          
                  "buttons": [
                        {
                        "type": "postback",
                        "title": "Fries",
                        "payload": "with Drink and French Fries"
                        }
                    ]
                },

                {
                  "title": conversation.properties().name,
                  "subtitle": "with Drink and Baconator Fries",
                  "image_url": "http://3.bp.blogspot.com/-PbruE8wmwAI/VY1nPWsDvyI/AAAAAAAAn1A/h8mUy5zi0Ug/s1600/Wendys-Baconator-Fries.jpg",          
                  "buttons": [
                        {
                        "type": "postback",
                        "title": "Baconator Fries",
                        "payload": "with Drink and Baconator Fries"
                        }
                    ]
                },
 
                {
                  "title": conversation.properties().name,
                  "subtitle": "with Drink and Garden Side Salad",
                  "image_url": "https://cdn1.dailyhealthpost.com/wp-content/uploads/2013-04-29-7-salads-worse-than-a-big-mac-wendy.jpg",          
                  "buttons": [
                        {
                        "type": "postback",
                        "title": "Salad",
                        "payload": "with Drink and Garden Side Salad"
                        }
                    ]
                }

                ]
              }
            }
          };



          if(conversation.properties().actionType == "comboType"){
               logger.info("Inside IF");
               conversation.reply(fbPayload);
          }

          else if (conversation.properties().actionType== "confirmCombo"){
              logger.info("Inside ELSE");
              conversation.variable("ComboType", conversation.text())
          }




        //conversation.reply({ text: 'Hey Tommy boy, this is just a placeholder, do not freak out! I am printing the response locally. Love, Bot'});
       
        //logger.info(util.inspect(fbPayload, {showHidden: false, depth: null}));
        //logger.info(util.inspect(conversation.response(), {showHidden: false, depth: null}))
        conversation.transition();
        logger.info("Combo type variable: ",conversation.variable("ComboType"));
        //logger.info("VARIABLE TYPE", conversation.text());
        done();
    }
};





