var gamestate = "start";
var canvas;
var carrotsGroup;
var carCount = 0, potCount = 0;
var carrotsInInvetory;
var carrotsInInvetoryText;
var potatoesInInventory = 0;
var potatoesInInventorySprite;
var potatoesClicked = 0;
var coin;
var coinsInInventory;
var i = 0;
var trade = "nothing"
tradeCarrotsButtonpressed = "false"
var carrotselleralerter = 0;
var confirmCarrotstext = 0;
var achievementController = 0;
var coinAchievementTextCounter = 0;


//plant carrots button
var plantCarrotsButton;


function preload() {

  //Buttons
  helpButtonImg = loadImage("Images/Help_button_img.png");
  farmButtonImg = loadImage("Images/Farm_button_img.png");
  marketButtonImg = loadImage("Images/Market_button_img.png");
  warButtonImg = loadImage("Images/war_button.png");
  plantCarrotsButtonImg = loadImage("Images/plant_carrots.png");
  harvestButtonImg = loadImage("Images/harvestButtonImg.png");
  backButtonImg = loadImage("Images/backButtonImg.png");
  sellCarrotsButtonImg = loadImage("Images/sellCarrots.png");
  unlockPotatoesButtonImg = loadImage("Images/unlockPotatoesImg.png");
  plantPotatoesButtonImg = loadImage("Images/plantPotaoesButtonImg.png");
  sellPotatoesButtonImg = loadImage("Images/sellPotatoes.png");
  tradeCarrotsImg = loadImage("Images/tradeCarrots.png");
  tradePotatoesImg = loadImage("Images/tradePotatoes.png");
  confirmDealButtonImg = loadImage("Images/confirmDealButtonImg.png");
  //okButtonImg = loadImage("Images/okButtonImg.png");

  //sprites and objects
  xpBottleImg = loadImage("Images/levelsBottle.png");
  coinImg = loadImage("Images/goldcoin.png")


  //Blobs
  yellowBlobImg = loadImage("Images/Yellow_blob_2.png");
  blueBlobImg = loadImage("Images/Blue_blob_2.png");
  orangeBlobImg = loadImage("Images/orange_blob_2.png");
  greenBlobImg = loadImage("Images/green_blob_2.png");

  //Knight
  knightFightImg = loadImage("Images/KnightFight.png");
  knightStandImg = loadImage("Images/knightStand.png");
  knightFinishImg = loadImage("Images/knightFinish.png");

  //Farm 
  carrotFarmImg = loadImage("Images/Carrot_farm_img.png");
  potatoFarmImg = loadImage("Images/potatoFarmImg.png");

  //Vegetables
  carrotImg = loadImage("Images/carrots.png");
  carrotsInInvetoryImg = loadImage("Images/carrot_basket.png");
  potatoImg = loadImage("Images/potato.png");
  potatoesInInventoryImg = loadImage("Images/potatoesInInventoryImg.png")

  //store image
  storeImg = loadImage("Images/store.png");

  //sky background 
  skyBackground = loadImage("Images/skybackground.png");

  //trade image
  tradeImg = loadImage("Images/image.png");

  //Coin achievement animation
  coinAchievementAnimation = loadAnimation("Images/Coin_achievement/1.png", "Images/Coin_achievement/2.png", "Images/Coin_achievement/3.png", "Images/Coin_achievement/4.png", "Images/Coin_achievement/5.png", "Images/Coin_achievement/6.png", "Images/Coin_achievement/7.png", "Images/Coin_achievement/8.png");

  //achievement unlocked sprite img
  achievementUnlockedImg = loadImage("Images/achievementUnlockedImg.png");

  //cash sprite image
  cashSpriteImg = loadImage("Images/cash.png");
}
function setup() {

  //Canvas
  canvas = createCanvas(1400, 800);
  canvas.position(20, 10);

  //Help button
  helpButton = createSprite(1000, 200);
  helpButton.addImage(helpButtonImg);
  helpButton.scale = 0.2;

  //Farm button
  farmButton = createSprite(1000, 300);
  farmButton.addImage(farmButtonImg);
  farmButton.scale = 0.2;

  //Market button
  marketButton = createSprite(1000, 400);
  marketButton.addImage(marketButtonImg);
  marketButton.scale = 0.2;

  //War button
  warButton = createSprite(1000, 500);
  warButton.addImage(warButtonImg);
  warButton.scale = 0.2

  //back button
  backButton = createSprite(100, 210);
  backButton.addImage(backButtonImg);
  backButton.scale = 0.17;
  backButton.visible = false;

  //Yellow Blob
  yellowBlob = createSprite(500, 200);
  yellowBlob.addImage(yellowBlobImg);
  yellowBlob.scale = 0.3;

  //Blue Blob
  blueBlob = createSprite(350, 210);
  blueBlob.addImage(blueBlobImg);
  blueBlob.scale = 0.3;

  //Orange Blob
  orangeBlob = createSprite(200, 190);
  orangeBlob.addImage(orangeBlobImg);
  orangeBlob.scale = 0.3;

  //Green Blob
  greenBlob = createSprite(100, 220);
  greenBlob.addImage(greenBlobImg);
  greenBlob.scale = 0.3;

  //Knight fight
  knightFight = createSprite(150, 500);
  knightFight.addImage(knightFightImg);
  knightFight.scale = 0.5;

  //Knight stand
  knightStand = createSprite(400, 520);
  knightStand.addImage(knightStandImg);
  knightStand.scale = 0.5;

  //Knight finish
  knightFinish = createSprite(620, 490);
  knightFinish.addImage(knightFinishImg);
  knightFinish.scale = 0.5;

  //carrot farm
  carrotFarm = createSprite();
  carrotFarm.addImage(carrotFarmImg);
  carrotFarm.visible = false;

  //plant carrots button
  plantCarrotsButton = createSprite(100, 100);
  plantCarrotsButton.addImage(plantCarrotsButtonImg);
  plantCarrotsButton.scale = 0.3;
  plantCarrotsButton.visible = false;
  plantCarrotsButton.setCollider("rectangle", 10, -10, 700, 220);
  //plantCarrotsButton.debug = true;

  //carrots group
  carrotsGroup = createGroup();

  //carrots
  carrot1 = createSprite(475, 220);
  carrot1.addImage(carrotImg);
  carrot1.scale = 0.2;
  carrot1.visible = false;
  carrotsGroup.add(carrot1);


  carrot2 = createSprite(475, 325);
  carrot2.addImage(carrotImg);
  carrot2.scale = 0.2;
  carrot2.visible = false;
  carrotsGroup.add(carrot2);

  carrot3 = createSprite(650, 220);
  carrot3.addImage(carrotImg);
  carrot3.scale = 0.2;
  carrot3.visible = false;
  carrotsGroup.add(carrot3);

  carrot4 = createSprite(650, 325);
  carrot4.addImage(carrotImg);
  carrot4.scale = 0.2;
  carrot4.visible = false;
  carrotsGroup.add(carrot4);

  carrot5 = createSprite(750, 220);
  carrot5.addImage(carrotImg);
  carrot5.scale = 0.2;
  carrot5.visible = false;
  carrotsGroup.add(carrot5);

  carrot6 = createSprite(750, 325);
  carrot6.addImage(carrotImg);
  carrot6.scale = 0.2;
  carrot6.visible = false;
  carrotsGroup.add(carrot6);

  carrot7 = createSprite(950, 220);
  carrot7.addImage(carrotImg);
  carrot7.scale = 0.2;
  carrot7.visible = false;
  carrotsGroup.add(carrot7);

  carrot8 = createSprite(950, 325);
  carrot8.addImage(carrotImg);
  carrot8.scale = 0.2;
  carrot8.visible = false;
  carrotsGroup.add(carrot8);

  //poatoes group
  potatoesGroup = createGroup();

  //potatoes
  potato1 = createSprite(475, 220);
  potato1.addImage(potatoImg);
  potato1.scale = 0.1;
  potato1.visible = false;
  potatoesGroup.add(potato1);

  potato2 = createSprite(475, 325);
  potato2.addImage(potatoImg);
  potato2.scale = 0.1;
  potato2.visible = false;
  potatoesGroup.add(potato2);

  potato3 = createSprite(650, 220);
  potato3.addImage(potatoImg);
  potato3.scale = 0.1;
  potato3.visible = false;
  potatoesGroup.add(potato3);

  potato4 = createSprite(650, 325);
  potato4.addImage(potatoImg);
  potato4.scale = 0.1;
  potato4.visible = false;
  potatoesGroup.add(potato4);

  potato5 = createSprite(750, 220);
  potato5.addImage(potatoImg);
  potato5.scale = 0.1;
  potato5.visible = false;
  potatoesGroup.add(potato5);

  potato6 = createSprite(750, 325);
  potato6.addImage(potatoImg);
  potato6.scale = 0.1;
  potato6.visible = false;
  potatoesGroup.add(potato6);

  potato7 = createSprite(950, 220);
  potato7.addImage(potatoImg);
  potato7.scale = 0.1;
  potato7.visible = false;
  potatoesGroup.add(potato7);

  potato8 = createSprite(950, 325);
  potato8.addImage(potatoImg);
  potato8.scale = 0.1;
  potato8.visible = false;
  potatoesGroup.add(potato8);



  //harvest button
  harvestButton = createSprite(400, 700);
  harvestButton.addImage(harvestButtonImg);
  harvestButton.scale = 0.3;
  harvestButton.visible = false;

  //carrots in inventory sprite
  carrotsInInvetorySprite = createSprite(900, 700);
  carrotsInInvetorySprite.addImage(carrotsInInvetoryImg);
  carrotsInInvetorySprite.visible = false;
  carrotsInInvetorySprite.scale = 0.1;

  //unlock potatoes
  unlockPotatoesButton = createSprite(700, 520);
  unlockPotatoesButton.addImage(unlockPotatoesButtonImg);
  unlockPotatoesButton.scale = 0.5;
  unlockPotatoesButton.visible = false;
  unlockPotatoesButton.debug = true;
  unlockPotatoesButton.setCollider("rectangle", 0, 0, 500, 200);

  //potato Farm
  potatoFarm = createSprite(100, 100);
  potatoFarm.addImage(potatoFarmImg);
  potatoFarm.scale = 1;
  potatoFarm.visible = false;

  //plant potatoes button
  plantPotatoButton = createSprite(700, 700);
  plantPotatoButton.addImage(plantPotatoesButtonImg);
  plantPotatoButton.scale = 0.3;
  plantPotatoButton.visible = false;

  //potatoes in inventory image
  potatoesInInventorySprite = createSprite(1350, 680);
  potatoesInInventorySprite.addImage(potatoesInInventoryImg);
  potatoesInInventorySprite.scale = 0.1;
  potatoesInInventorySprite.visible = false;

  //store
  store = createSprite(700, 480);
  store.addImage(storeImg);
  store.scale = 0.5;
  store.visible = false;

  //sell potatoes button
  sellPotatoesButton = createSprite(1198, 350);
  sellPotatoesButton.addImage(sellPotatoesButtonImg);
  sellPotatoesButton.scale = 0.2;
  sellPotatoesButton.visible = false;

  //sell carrots
  sellCarrotsButton = createSprite(1200, 250);
  sellCarrotsButton.addImage(sellCarrotsButtonImg);
  sellCarrotsButton.scale = 0.17;
  sellCarrotsButton.visible = false;

  //trade
  tradeSprite = createSprite(600, 350);
  tradeSprite.addImage(tradeImg);
  tradeSprite.scale = 1;
  tradeSprite.visible = false;

  //trade carrots button
  tradeCarrotsButton = createSprite(410, 550);
  tradeCarrotsButton.addImage(tradeCarrotsImg);
  tradeCarrotsButton.scale = 0.5;
  tradeCarrotsButton.visible = false;

  //trade potatoes button
  tradePotatoesButton = createSprite(790, 550);
  tradePotatoesButton.addImage(tradePotatoesImg);
  tradePotatoesButton.scale = 0.5;
  tradeCarrotsButton.setCollider("rectangle", 0, 0, 500, 100);
  tradePotatoesButton.visible = false;

  //confirm deal button
  confirmDealButton = createSprite(600, 700);
  confirmDealButton.addImage(confirmDealButtonImg);
  confirmDealButton.scale = 0.5;
  confirmDealButton.visible = false;

  //coin
  coin = createSprite(730, 340);
  coin.addImage(coinImg);
  coin.scale = 0.07;
  coin.visible = false;

  //xp bottle
  xpBottle = createSprite(915, 340);
  xpBottle.addImage(xpBottleImg);
  xpBottle.scale = 0.08;
  xpBottle.visible = false;

  //Coin achievement
  coinAchievement = createSprite(520, 380);
  coinAchievement.addAnimation("Coin Achievement animation", coinAchievementAnimation);
  coinAchievement.scale = 0.08;
  coinAchievement.visible = false;

  //Ok Button
  okButton = createSprite(700, 700);
  //okButton.addImage(okButtonImg);
  okButton.scale = 0.4;
  okButton.visible = false;

  //achievement unlock sprite
  achievementUnlocked = createSprite(700, 350);
  achievementUnlocked.addImage(achievementUnlockedImg);
  achievementUnlocked.scale = 0.4
  achievementUnlocked.visible = false;

  //cash 
  cashSprite = createSprite(820,490);
  cashSprite.addImage(cashSpriteImg);
  cashSprite.scale = 0.1;
  cashSprite.visible = false;
}

function draw() {
  background("black");

  if (mousePressedOver(farmButton)) {
    gamestate = "farm";
  }

  if (mousePressedOver(marketButton)) {
    gamestate = "market";
  }

  if (gamestate === "farm") {
    //change market button and help button position
    marketButton.x = 100;
    marketButton.y = 50;

    helpButton.x = 100;
    helpButton.y = 130;

    //backButton
    backButton.visible = true;

    //hiding sprites
    farmButton.visible = false;
    warButton.visible = false;
    knightFight.visible = false;
    knightFinish.visible = false;
    knightStand.visible = false;
    blueBlob.visible = false;
    greenBlob.visible = false;
    orangeBlob.visible = false;
    yellowBlob.visible = false;

    //Carrot farm
    carrotFarm.x = 750;
    carrotFarm.y = 250;
    carrotFarm.visible = true;
    carrotFarm.scale = 0.6;

    //plant carrots button
    plantCarrotsButton.x = 700;
    plantCarrotsButton.y = 700;
    plantCarrotsButton.visible = true;


    if (mousePressedOver(plantCarrotsButton)) {
      if (carCount < 8) {
        carrotsGroup.get(carCount).visible = true;
        carCount++;
      }
    }

    if (carrot8.visible === true) {
      harvestButton.visible = true;
    }

    if (mousePressedOver(harvestButton)) {
      carrotsGroup.setVisibleEach(false);
      carrotsInInvetory = 8;
      carrotsInInvetorySprite.visible = true;
    }

    if (carrotsInInvetorySprite.visible === true) {
      if (potatoesClicked === 0) {
        fill("orange")
        textFont("cooper");
        textSize(20);
        text("Carrots in your inventory :- ", 1000, 700);
        fill("lightgreen");
        text(carrotsInInvetory, 1230, 700);
        unlockPotatoesButton.visible = true;
        push();
        fill("cyan");
        text("Sell your 8 carrots to unlock potatoes! Once you unlock", 500, 580);
        text("potatoes you can sell them and make more money and get a lot of xp!", 500, 600);
        pop();
      }
    }

    if (mousePressedOver(backButton)) {
      gamestate = "start";
    }

    if (mousePressedOver(marketButton)) {
      gamestate = "market";
    }

    if (mousePressedOver(unlockPotatoesButton)) {
      potatoesClicked = 1;
    }

    if (potatoesClicked === 1) {
      carrotsInInvetory = 0;
      carrotFarm.visible = false;
      carrotsInInvetorySprite.visible = false;
      //harvest.addImage()
      harvestButton.visible = false;
      plantCarrotsButton.visible = false;
      unlockPotatoesButton.visible = false;

      fill("orange")
      textFont("cooper");
      textSize(20);
      text("Carrots in your inventory :- ", 1000, 700);
      fill("lightgreen");
      text(carrotsInInvetory, 1230, 700);


      potatoFarm.x = 700;
      potatoFarm.y = 250;
      potatoFarm.visible = true;
      potatoFarm.scale = 0.5

      plantPotatoButton.visible = true;
      plantPotatoButton.debug = true;
      plantPotatoButton.setCollider("rectangle", 0, 0, 800, 200);


      if (mousePressedOver(plantPotatoButton)) {
        if (potCount < 8) {
          potatoesGroup.get(potCount).visible = true;
          //potatoesGroup.get(potCount).debug = true;
          potatoesGroup.get(potCount).depth = potatoFarm.depth + 1;
          potCount++;
        }
      }

      if (potCount === 8) {
        harvestButton.visible = true;
        harvestButton.setCollider("rectangle", -50, -50, 950, 200)
        harvestButton.debug = true;
        i = 10

        if (mousePressedOver(harvestButton)) {
          potatoesGroup.setVisibleEach(false);
          potatoesInInventory = 8;
        }

        if (i === 10) {
          potatoesInInventorySprite.x = 900;
          potatoesInInventorySprite.y = 750;
          potatoesInInventorySprite.visible = true;

          fill("yellow")
          textFont("cooper");
          textSize(20);
          text("Potatoes in your inventory :- ", 1000, 720);
          fill("lightgreen");
          text(potatoesInInventory, 1230, 720);
        }
      }
    }
  }

  if (gamestate === "market") {

    background(skyBackground);

    //hide all the farm images
    carrotsInInvetorySprite.visible = false;
    carrotFarm.visible = false;
    marketButton.visible = false;
    plantCarrotsButton.visible = false;
    harvestButton.visible = false;
    farmButton.visible = false;
    warButton.visible = false;
    blueBlob.visible = false;
    greenBlob.visible = false;
    orangeBlob.visible = false;
    yellowBlob.visible = false;
    knightFight.visible = false;
    knightFinish.visible = false;
    knightStand.visible = false;
    potatoFarm.visible = false;
    potatoesInInventorySprite.visible = false;
    plantPotatoButton.visible = false;
    unlockPotatoesButton.visible = false;
    helpButton.visible = false;
    backButton.visible = false;

    //show back button
    backButton.visible = true;

    //change the y axis for the buttons in place of market button
    if (achievementController === 0) {
      helpButton.x = 100;
      helpButton.y = 50;
      backButton.y = 130;

      helpButton.visible = true;
      backButton.visible = true;
      sellPotatoesButton.visible = true;
    }

    store.visible = true;
    sellPotatoesButton.visible = true;
    sellCarrotsButton.visible = true;

    if (mousePressedOver(sellCarrotsButton) && sellCarrotsButton.visible === true) {
      gamestate = "trade"
      trade = "carrots"
      background(skyBackground);
    }
  }

  if (gamestate === "trade" && trade === "carrots") {
    background(skyBackground);
    sellCarrotsButton.visible = false;
    store.visible = false;

    if (achievementController === 0) {
      tradeSprite.visible = true;
      tradeCarrotsButton.visible = true;
    }

    if (mousePressedOver(tradeCarrotsButton)) {
      tradeCarrotsButtonpressed = "true"
    }
  }

  if (tradeCarrotsButtonpressed === "true") {
    if (carrotsInInvetory >= 8) {
      if (achievementController === 0) {
        if(carrotselleralerter===1)
        {
          confirmDealButton.visible = true;
          confirmDealButton.x = 810
          confirmDealButton.y = 540
          carrotsInInvetorySprite.x = 470;
          carrotsInInvetorySprite.y = 345;
          carrotsInInvetorySprite.depth = tradeSprite.depth + 1;
          carrotsInInvetorySprite.visible = true;
          carrotselleralerter = 0;
          confirmDealButton.setCollider("rectangle", -10, 10, 600, 160);
          coin.visible = true;
          xpBottle.visible = true;
        }
      }
    }

    else if (carrotselleralerter === 0) {
      alert("You must have atleast 8 carrots in your inventory");
      carrotselleralerter = 1;
    }

    if (mousePressedOver(confirmDealButton) && tradeCarrotsButtonpressed === "true") {
      okButton.visible = true;
      confirmCarrotstext = 1;

      confirmDealButton.visible = false;
      carrotsInInvetorySprite.visible = false;
      coin.visible = false;
      xpBottle.visible = false;
      tradeSprite.visible = false;
      tradeCarrotsButton.visible = false;

      helpButton.visible = false;
      backButton.visible = false;
      sellPotatoesButton.visible = false;
      achievementController = 1;
    
      achievementUnlocked.visible = true;
      coinAchievement.visible = true;
      coinAchievement.depth = achievementUnlocked.depth + 1;
      coinAchievementTextCounter = 1;

      cashSprite.visible = true;

      /*if (mousePressedOver(okButton) && tradeCarrotsButtonpressed === "true")
      {
        coinAchievement.visible = false;
        coinAchievementTextCounter === 0;
      }*/
    }
  }

  drawSprites();
  if (tradeCarrotsButtonpressed === "true") {
    if (carrotsInInvetory >= 8) {
      if (confirmCarrotstext === 0) {
        fill("orange");
        textFont("showcard gothic");
        textSize(60);
        text(carrotsInInvetory + " x", 320, 350);

        fill("green");
        textFont("showcard gothic");
        textSize(20);
        text("2 X ", 905, 320);

        fill("cyan");
        textFont("showcard gothic");
        textSize(20);
        text("(Levels)", 883, 380);
      }
    }
  }

  if (coinAchievementTextCounter === 1) {
    fill(75, 247, 7);
    textFont("showcard gothic");
    textSize(30);
    text("Coin Achievement",720,330);
    text("Unlocked! You have",720,360);
    text(" made your first ",720,390);
    text("revenue!! $$",720,420);
  }
}

