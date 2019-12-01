import React from 'react';
import '../App.css';
import Eddie from '../images/eddie.jpg';
import Buzz from '../images/buzz.jpg';
import Viper from '../images/viper.jpg';
import Toast from '../images/toast.jpg';
import Boo from '../images/boo.jpg';
import Mick from '../images/mick.jpg';

class Maincharacters extends React.Component {

  render() {
    return (
      <div className="App">
        
        <h3>Eddie Durcan</h3>
        <img src={Eddie} width="400" height="300" />
        <br>
        <p>Eddie Durcan is the show's main character.Eddie often dreams of big plans such as hoping to go to America to work and get rich but is stuck in Buzz's cottage in Castletown and often gets grief from his mother Biddy Durcan and his Uncle Mick about his unemployment.</p>
        </br>
        <h3>Buzz McDonnell</h3>
        <img src={Buzz} width="400" height="300" />
        <br>
        <p>Buzz is Eddie's best friend on the show.He looks after his aunt's cottage in which he lets his friends stay there free of charge.He's often the show's philosipher and most of the time wears a Celtic Fc Shirt</p>
        </br>
        <h3>Francis "The Viper" Higgins</h3>
        <img src={Viper} width="400" height="300" />
        <br>
        <p>
           The Viper is the show's main antagonaist and a minor drug dealer who dreams of a big career in Hollywood.He is Eddie Durcan biggest rival in the show and tries to belittle or put down Eddie anytime he sees an oppurtunity to do so such as when bought Eddie's repossessed Nissan Skyline which Eddie dearly loved or nearly ruining Eddie's team chances of winning King of the town.
        </p>
        </br>
        <h3>Frenchtoast O'Toole</h3>
        <img src={Toast} width="400" height="300" />
        <br>
        <p>Frenchtoast also lives in the cottage and is fond of the drink.He is a fella that loves nature and fishing.He also wears a hat the majority of the time.</p>
        </br>
        <h3>Thomas "The Boo" Boogenhagen</h3>
        <img src={Boo} width="400" height="300" />
        <br>
        <p>The Boo hangs around the cottage a fair bit and gets on well with Eddie and the rest.He is a fitness lover with somewhat of a mysterious past.His best friend Kofi is from Ghana</p>
        </br>
        <h3>Uncle Mick</h3>
        <img src={Mick} width="400" height="300" />
        <br>
        <p>Uncle Mick is Eddie's Uncle on the show.In the King Of The Town Episode he helps Eddie and the team win the King Of The Town Competition.He also buys Eddie a plane ticket to America in the second series as long as he lloks after his farm.He is a farmer and loves working outside as well as having the craic with the lads.</p>
        </br>
      </div>
    );
  }
}

export default Maincharacters;