Development Plan:

Components:
*Header
    - menu (buttons:)
        -Tap New Keg
        -Edit 
*Keg
    -Amount left
        - dynamic filtering ?
*Sell Pint
*Keg List (Menu)
    - arrange by cost
    - arrange by ABV
*New Keg Form(TapKeg)
*Edit Keg Form


Layout:

                                Tap-Room-Header
                     Header Menu Options (TapNewKeg, EditKegInfo)
                     --------------------------------------------
                          Filter Buttons (by ABV) (by Cost)
                     --------------------------------------------

                Keg1      Keg2       Keg3       Keg4      Keg5      Keg6
                -----------------------------------------------------------
               | name    |  name   |  name   |  name   |  name   |  name   |
               | brewery | brewery | brewery | brewery | brewery | brewery |
               | price   |  price  |  price  |  price  |  price  |  price  |
               | ABV     |   ABV   |    ABV  |   ABV   |   ABV   |   ABV   |
               |(SellBtn)|(SellBtn)|(SellBtn)|(SellBtn)|(SellBtn)|(SellBtn)|
               -------------------------------------------------------------
               | Keg7    | Keg8    | Keg9    | Keg10   | Keg11   |  Keg12  |
               |                                                           |
               |                                                           |
               |                                                           |
               -------------------------------------------------------------

Components Tree: 
                                App
                        Header         MainPage
                       /      \          |
                   TapNewKeg  EditKeg    |
                                        / \
                                 Filters   KegList
                                  /  \          \
                            byABV  byPrice      Keg(props)
                                                   /    \
                                            SellBtn      ChangeKegBtn



## Learn More
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
To learn React, check out the [React documentation](https://reactjs.org/).
### Code Splitting
This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting
### Analyzing the Bundle Size
This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size
### Making a Progressive Web App
This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app
### Advanced Configuration
This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration
### Deployment
This section has moved here: https://facebook.github.io/create-react-app/docs/deployment
### `npm run build` fails to minify
This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
