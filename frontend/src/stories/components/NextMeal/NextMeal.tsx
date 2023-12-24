import {
  Actions,
  Button,
  Root,
  Summary,
  Media,
  Content,
  SummaryMain,
  IconButton,
  Menu,
  Grid,
} from "./NextMeal.styled";
import { formatDistance, parse, sub } from "date-fns";

interface NextMealProps {
  meal: {
    name: string;
    calories: number;
    imgUrl?: string;
    times: {
      totalCooking: number;
      activeCooking: number;
      preperation: number;
      preRequisite?: number;
    };
  };
  user: { targetedServingTime: string };
}

export const NextMeal = (props: NextMealProps) => {
  const { meal, user } = props;
  const { targetedServingTime } = user;
  const { name, calories, imgUrl, times } = meal;
  const { totalCooking, activeCooking, preperation, preRequisite } = times;

  const timeDistance = formatDistance(
    new Date(),
    sub(parse(targetedServingTime, "HH:mm", new Date()), {
      minutes: totalCooking,
    })
  );

  return (
    <Root>
      <Summary>
        <SummaryMain>
          <h3>{name}</h3>
          <IconButton>
            <Menu />
          </IconButton>
        </SummaryMain>
        <div className="header-additonal">
          <p>Starting cooking in {timeDistance}</p>
          {preRequisite && (
            <p>
              Warning: Prep required at least {preRequisite} minutes before
              starting
            </p>
          )}
        </div>
      </Summary>
      <Media alt={`Finished ${name}`} loading="lazy" src={imgUrl}></Media>
      <Content>
        <Grid>
          <p>Calories: {calories} Kcal</p>
          <p>Active: {activeCooking} minutes</p>
          <p>Preparation: {preperation} minutes</p>
          <p>Total: {totalCooking} minutes</p>
        </Grid>
        <Actions>
          <Button>Cook now</Button>
        </Actions>
      </Content>
    </Root>
  );
};
