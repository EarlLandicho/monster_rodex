
import './card-list.style.css'
import { Card } from '../card/card.component';
export const CardList = (props) => (
    <div className = 'card-list'>
    {

        props.monsters.map(
            monsterObj => (
                <Card  key = {monsterObj.id} monster = {monsterObj}/>
            )
        )

    }

        
    </div>
)
