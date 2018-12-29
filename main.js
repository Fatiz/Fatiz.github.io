var loggedin = false
var useremail = null
var userpsw = null
var userfame = null
var buydataarray = []

  /*An array containing all the items names*/
var items = ["Sweet Sugar Rush Staff", "Shield of Vendettas", "Carnivorous Sentient Spell", "Candy Robe","Omega Ancient Sword","Alpha Ancient Seal","Ancient Stone Guardian Armor","Janus Eye Ring","Burger K-ring","Bow of the Lightning God","Lightning God Quiver", "Lightning God Armor","Lightning God Ring", "Acid Katana","Acid Star","Acid Armor","Acid Ring","The Searing Blood","PoOoOoOokkErrRr","Tail of the Riverborn","The Winged Wand","Doom Katana","Skull of the Eagle Sentry","Windcutter","The Seaweed Sword","Greeni","The Drenched Armor","The Scorched Armor","Throwing Spear","Book of the Rejuvenating River","The Scavenger's Attire","Wooden Armor of the Apple Tree","Broken Branch","Treesmasher's Tail","Head of the Riverborn","Firebreather's Tail","Shadowbone Sword","Shadowscale's Skull","Eyes of the Firebreather","Candlestick","Water from the River","Handcannon","Flames in a Bottle","Spikes of the Treesmasher","Wing Necklace","The Split Arrow","Champion's Attire","Practice Target","The River Robe","Head of the Firebreather","The Searing Shower", "Shadow Scales", "The Hidden Armor", "Loki's Raiment","Thor's Armor","Odin's Attire","Hela's Robe","Enchanted Uru Sword", "Gungnir","Hela's Power","Special Crate","Item Crate","Potion Crate","The Incombustible Robe","Music of the Gods", "Helment of Thor", "Thor's Bracelets","Hela's Horn's","Golden Asgardian Helmet","Loki's Dagger", "Obsidian Asgardian Helmet", "The Relentless Armor", "Warbringer's Flagpole", "Shadowscale's Horn","Loki's Horns","Mjolnir","Realm Power","Helm of Oryx","Armor of Oryx","Ring of Oryx","Gjallarhorn","Trickster's Toy","Arcane Bait","Sword of Oryx","Miscellaneous Crate","Robe of the Nature Goddess","Ring of the Nature Goddess","Platinum Asgardian Helmet","Spit of a Troll","Ortar's Enchantment","Gravedigger's Shovel","Staff of Nature","Spell Full of Nature","The Soul Ring","Sword of the Fallen","Helm of the Fallen","Armor of the Fallen","Trophy of the Fallen","Destructor Dagger","Destructor Armor","Destructor Cloak","Ring of the Destructor","Rotting Arm","Carrier's Suit","The Consumed Ring","Head Full of Brains","Soul Scatter","The Unbreakable Tombstone","The Soul Collector","Gravedigger's Disguise","Heavy Bow of the Asgard Guardian","Wooden Elegance","Leather Armor of the Asgard Guardian","Asgard's Tresure","Potion of Growth","Potion of Ants","Rigged Potion of the Alchemist","Dagger of Goddess of Goddesses","Armor of the Depths","Cloak of the 1000 Oceans","Oceanic Treasure","Quiver of the Asgard Ruins","Small Nodestone","Wand Full of Mana","Nodestone","Small Galactic Nodestone", "Galactic Nodestone", "Magnificent Receipt","Work of the Alchemist","Odin's Ravens","Ring of the Poker King","A Worthy Jewel","Blade of the Fallen Sky","Undead's Gross Bow","Dagger of the Endless Void","Radiant Wand of Royalism","Crystallized Ring of Hatred","Bright Robe of the Crystals","Crystallized Scepter","Molten Katana","Dreadstump's Rapier","Himura's Katana","Fang of Frost","Leviathan's Repentance","Hallow's End","Shattered War Axe","Metal Blood Bow","Sword of the Aquatic God","Seal of the Aquatic God","Armor of the Aquatic God","Ring of the Aquatic God","Ring of the Encounter","Sword of the Demon Lord","Helm of the Demon Lord","Armor of the Demon Lord","Ring of the Demon Lord","Wand of the Rising Star","Lucky Box","Lucky Potion","Hela's Essence","A Precious Rock","An actual cookie","A skull covered in chocolate","Ring of the Mystical Encounter","Scepter of the Encounter","The Frozen Tome","Ring of Ortar","Powerful Twig","Wooden Head from the Totem","Mysterious Incantation","Swamp Mirror","Asura","Traceless","Malevolent Armor","A trap made of cookies","A triangular cookie","A Desirable Ornament","Gray Belt","Hornshot","Spectral's Cloak","Forsaken Ring","Gem Gem's Gem","Reset Scroll (SP)","Linen Coat","Ring of the Cosmos","Potion of Life","Potion of Mana","Potion of Speed","Potion of Wisdom","Potion of Attack","Potion of Defense","Potion of Vitality"];

document.addEventListener("DOMContentLoaded", function(event) {
  var modal = document.getElementById('id01');
  var badlogin = document.createElement('label')
  badlogin.className = 'error';
  badlogin.textContent = "Bad Login";
  badlogin.style.display = 'none';
  document.getElementById('loginbox').appendChild(badlogin) 
  function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong style='color: #ff3f05; font-weight: 300';> " + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += '<input type="hidden" value="' + arr[i] + '">'; // Change back to hidden
            /*execute a function when someone clicks on the item value (DIV element):*/
            b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
  }
    // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
  autocomplete(document.getElementById("myInput"), items);


});




var getHTML = function ( url, callback ) {

  // Feature detection
  if ( !window.XMLHttpRequest ) return;

  // Create new request
  var xhr = new XMLHttpRequest();

  // Setup callback
  xhr.onload = function() {
    if ( callback && typeof( callback ) === 'function' ) {
      callback( this.responseXML );
      console.log("Loaded")
    }
  }

  // Get the HTML
  xhr.open( 'GET', url );
  xhr.responseType = 'document';
  xhr.send();

};



function loginuser(email,psw) {
  const proxyurl = "https://cors-anywhere.herokuapp.com/"; // some CORS stuff lmao
  getHTML( proxyurl+'http://192.223.31.195/account/verify?ignore=3548773&guid='+email.value+'&gameClientVersion=X2.2&cacheBust=522542&password='+psw.value, function (response) {
      //console.log('http://192.223.31.195/account/verify?ignore=3548773&guid='+email.value+'&gameClientVersion=X2.2&cacheBust=522542&password='+psw.value)
      if(response.documentElement.innerHTML == "Bad Login") {
        badlogin.style.display = 'inline';
      } else if(response.getElementsByTagName('name') != null){
        var modal = document.getElementById('id01');
        var fame = document.createElement('label')
        fame.style.display = 'none';
        fame.setAttribute('id', 'fame')
        var br = document.createElement('br');
        br.setAttribute('id', br)
        //fame img
        var fameimg = document.createElement('img')
        fameimg.setAttribute("src", "fame.png");
        fameimg.style.display = 'none';
        //console.log(response.getElementsByTagName("name")[0].innerHTML)
        var el = document.createElement('html'); 
        el.innerHTML = response.documentElement.innerHTML;
        document.getElementById("icon").setAttribute('href','favicon2.png') // We couldn't decide which icon to use so we change it when you login :P
        document.getElementsByClassName("loginbutton")[0].innerHTML = "Logged in as: "+ el.getElementsByTagName('name')[0].innerHTML;
        var accfame = parseInt(el.getElementsByTagName('fame')[0].innerText) + " "
        loggedin = true;
        document.getElementsByClassName('loginbutton')[0].appendChild(br)
        document.getElementsByClassName('loginbutton')[0].appendChild(fame)
        document.getElementsByClassName('loginbutton')[0].appendChild(fameimg)
        modal.style.display = 'none';
        fame.style.display = 'inline';
        useremail = email.value;
        userpsw = psw.value;
        userfame = parseInt(el.getElementsByTagName('fame')[0].innerText)
        fame.textContent = "Fame: "+(accfame);
        fameimg.style.display = 'inline';


        //document.documentElement.innerHTML = response.documentElement.body.account.stats.fame.innerHTML;
      }
      

  });  
}


function searchMarket(search) {

  const proxyurl = "https://cors-anywhere.herokuapp.com/"; // some CORS stuff lmao
  

  if(loggedin == true) {
    var header = document.getElementById("headerrow")
    buydataarray = []
    var totalprice = 0
    document.getElementById("tablelist").innerHTML = ""
    document.getElementById("tablelist").appendChild(header)
    getHTML(proxyurl + "http://192.223.31.195/auctionHouse/search?g="+useremail+"cacheBust=381072&search="+search+"&password="+userpsw+"&guid="+useremail+"&ignore=2094010&ignoreId=48186&gameClientVersion=X2%2E2", function (response) {
      //console.log("http://192.223.31.195/auctionHouse/search?g="+useremail+"cacheBust=381072&search="+search+"&password="+userpsw+"&guid="+useremail+"&ignore=2094010&ignoreId=48186&gameClientVersion=X2%2E2")
      var el = document.createElement('html');
      try{
        el.innerHTML = response.documentElement.innerHTML;
      } catch {
        document.getElementById('SearchButton').textContent = "Item not found!"
        setTimeout(function(){document.getElementById('SearchButton').textContent = "Search"}, 1000);
      }
      //document.documentElement.innerHTML = el.innerHTML
      //console.log(el.getElementsByTagName('result').length) // how many
      //for loop
      var i; 
      for(i=0; i<el.getElementsByTagName('result').length; i++) {
        var row = document.createElement('tr')
        item = document.createElement('td')
        item.textContent = search
        item.setAttribute("style", "height: 60px;")
        seller = document.createElement('td')
        seller.textContent = el.getElementsByTagName('seller')[i].textContent
        seller.setAttribute("style", "height: 60px;")
        price = document.createElement('td')
        price.textContent = el.getElementsByTagName('price')[i].textContent + " "
        price.setAttribute("style", "height: 60px;  width: 40px;")
        fame = document.createElement('img')
        fame.setAttribute('src', 'fame.png')
        price.appendChild(fame)
        time = document.createElement('td')
        time.textContent = el.getElementsByTagName('hours')[i].textContent + " Hours"
        time.setAttribute("style", "height: 60px;")
        buy = document.createElement('button')
        buy.setAttribute('type', 'button')
        buy.setAttribute('style', 'width: 50%; height: 80%;')
        // cancer

        accid = el.getElementsByTagName('accid')[i].textContent
        realtime = el.getElementsByTagName('time')[i].textContent
        pricevalue = el.getElementsByTagName('price')[i].textContent
        totalprice = parseInt(el.getElementsByTagName('price')[i].textContent) + totalprice
        saleid = el.getElementsByTagName('saleid')[i].textContent
        typeid = el.getElementsByTagName('type')[i].textContent
        buy.setAttribute('id', i)
        //what
        buydataarray.push([accid,realtime,pricevalue,typeid,saleid,buy.id])
        //console.log(buydataarray[i])

        buy.setAttribute('onclick', "PurchaseItem.apply(null, buydataarray[id])")
        buy.textContent = "Buy"
        buy.setAttribute('class', 'button bannerSpecial')



        row.appendChild(item);
        row.appendChild(seller);
        row.appendChild(price);
        row.appendChild(time);
        row.appendChild(buy);
        document.getElementById('tablelist').appendChild(row)  
      }
      document.getElementById("cost").textContent = "Price "+"- Avg. "+Math.round((totalprice/buydataarray.length))+""
      fame2 = document.createElement('img')
      fame2.setAttribute('src','fame.png')
      document.getElementById('cost').appendChild(fame2)
    });
  } else {
    modal.style.display = 'inline'
  }
}
//test
//http://192.223.31.195/auctionHouse/buy?g=fatizmailbox@gmail.comcacheBust=759569&id=2306792&time=636812424534898655&password=apples&type=21255&guid=fatizmailbox@gmail.com&ignore=1899964&price=10000&accId=24668&gameClientVersion=X2.2E2
function PurchaseItem(accID, time, price, type, saleID, butid) {
  const proxyurl = "https://cors-anywhere.herokuapp.com/"; // some CORS stuff lmao
  //console.log(accID,time,price,type,saleID);
  //console.log(loggedin, userfame)
  if(loggedin == true && userfame > price){
    getHTML(proxyurl + "http://192.223.31.195/auctionHouse/buy?g="+useremail+"cacheBust=759569&id="+saleID+"&time="+time+"&password="+userpsw+"&type="+type+"&guid="+useremail+"&ignore=1899964&price="+price+"&accId="+accID+"&gameClientVersion=X2.2E2", function (response) {
      
      //console.log("http://192.223.31.195/auctionHouse/buy?g="+useremail+"cacheBust=759569&id="+saleID+"&time="+time+"&password="+userpsw+"&type="+type+"&guid="+useremail+"&ignore=1899964&price="+price+"&accId="+accID+"&gameClientVersion=X2.2E2")
      userfame = (userfame-price)
      document.getElementById('fame').textContent = "Fame: " + (userfame);
      //console.log(document.getElementById('fame').textContent)
      document.getElementById(butid).textContent = 'Gone'
      document.getElementById(butid).setAttribute('disabled', 'true')
    });
  } else if(loggedin == false) {
    modal.style.display = 'inline';
  } else if(userfame < price){
    document.getElementById(butid).textContent = "Not Enough Fame!"
    setTimeout(function(){document.getElementById(butid).textContent = "Buy"}, 1000);
  }
}




  

