Development Plan:

Component Tree found in 'src\assets\planning\TapRoom-ComponentTree.jpg'


Components:
*Header
    - menu/nav buttons
        1) Tap New Keg = '/addkeg' path
            *AdminQuestion (component)
                *NewKegForm (component)
        2) Edit Kegs = '/editkeg' path
            *AdminQuestion (component)
                *TapList (component) -> on click takes you to:
                    *EditKegForm (component)

*KegList(component)
    - dynamic filtering +(bonus)+
        - filter by cost
        - filter by ABV
    *Keg(component)    
        -name
        -brewery
        -cost
        -abv
        -sell pint (button) [stateChange]
        -amount left [stateChange]
            -dynamic rendering +(SuperBonus)+
        -refill/change keg(button) +(bonus)+ [stateChange]
        
*NewKegControl (component)
    *AdminQuestion (component)
    *NewKegForm (component)
EditKegControl (component)
    *AdminQuestion( component)
    *EditKegForm (component)


TapList component layout:

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


