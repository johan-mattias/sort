let value = 0
for (let index = 0; index < 4; index++) {
    basic.showIcon(IconNames.Heart)
    for (let index = 0; index < 1000000; index++) {
        value = randint(0, 1000)
    }
    basic.showIcon(IconNames.Butterfly)
}
