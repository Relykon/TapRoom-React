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


New Component Tree:
