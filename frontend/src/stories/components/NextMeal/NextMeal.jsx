import { Actions,
  Button,
  Root, 
  Summary,
  Media, 
  Content,
  SummaryMain,
  IconButton, 
  Menu,
  Grid 
} from './NextMeal.styled';
import { formatDistance, parse, sub } from 'date-fns';
import PropTypes from 'prop-types';

export const NextMeal = props => {
  const {
    name,
    totalCookingTime,
    activeCookingTime,
    targetedServingTime,
    imgUrl,
    calories,
    preRequisiteTime,
    preperationTime
  } = props;


  const timeDistance = formatDistance(
    new Date(),
    sub(
      parse(targetedServingTime, 'HH:mm', new Date()),
      { minutes: totalCookingTime }
    )
  )

  return (
    <Root >
      <Summary>
        <SummaryMain >
          <h3>{name}</h3>
          <IconButton><Menu /></IconButton>
        </SummaryMain>
        <div className='header-additonal'>
          <p>Starting cooking in {timeDistance}</p>
          {preRequisiteTime && <p>Warning: Prep required at least {preRequisiteTime} minutes before starting</p>}
        </div>
      </Summary>
      <Media alt={`Finished ${name}`} loading='lazy' src={imgUrl} >

      </Media>
      <Content>
        <Grid>
          <p>Calories: {calories} Kcal</p>
          <p>Active: {activeCookingTime} minutes</p>
          <p>Preparation: {preperationTime} minutes</p>
          <p>Total: {totalCookingTime} minutes</p>
        </Grid>
        <Actions >
          <Button>Cook now</Button>
        </Actions>
      </Content>
    </Root>);
};

NextMeal.propTypes = {
  /**
     * User's name
     */
  name: PropTypes.string.isRequired,

  /**
     * Number of minutes that the meal takes to cook
     */
  totalCookingTime: PropTypes.number.isRequired,

  /**
     * Number of minutes that the meal takes to cook
     */
  activeCookingTime: PropTypes.number.isRequired,

  /*
     * Number of minutes the is estimated for preperation
     */
  preperationTime: PropTypes.number.isRequired,

  /**
     * Number of minutes that prepartioon needs to be done before starting to cook
     */
  preRequisiteTime: PropTypes.number,

  /**
     * The time the user wants to serve the meal
     */
  targetedServingTime: PropTypes.string,

  /**
     * The image of the meal
     */
  imgUrl: PropTypes.string,

  /**
     * The number of calories in the meal
     */
  calories: PropTypes.number.isRequired
};

