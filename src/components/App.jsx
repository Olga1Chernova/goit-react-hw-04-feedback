import { useState } from "react";

import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const total = feedback.good + feedback.neutral + feedback.bad;

  const countPositiveFeedbackPercentage = () => {
      const result = Math.round((feedback.good / total) * 100);
      return result;
  }
  
  const onLeaveFeedback = name => {
    setFeedback(prevState =>{
      const value = prevState[name];
      return { ...prevState, [name]: value + 1 };
    })
  };

  const feedbackOption = ["good", "neutral", "bad"];

  const positivePercentage = countPositiveFeedbackPercentage();
  
  return (
    <Section title="Please leave feedback">
      <FeedbackOptions
        options={feedbackOption}
        onLeaveFeedback={onLeaveFeedback}
      />
      {total > 0 ? (
        <Statistics
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </Section>
  );

}

export default App;




 /* 
  class App extends Component{
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }
    
    
    countTotalFeedback () {
      const { good, neutral, bad } = this.state;
      let total = 0;
      total = good + neutral + bad;
      return total;
    }

    countPositiveFeedbackPercentage() {
      const { good } = this.state;
      const total = this.countTotalFeedback();
      const result = Math.round((good / total) * 100);
      return result;
    }

    onLeaveFeedback = (name) => {
      this.setState(prevState => {
        return {
          [name]: prevState[name] + 1
        }
      })
    }

    render() {
      const { good, neutral, bad } = this.state;
      const totalResult = this.countTotalFeedback();
      const positivePercentage = this.countPositiveFeedbackPercentage();
        return (
              <Section title="Please leave feedback">
                <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={this.onLeaveFeedback} />
                {this.countTotalFeedback() > 0 ? <Statistics good={good} neutral={neutral} bad={bad} total={totalResult} positivePercentage={positivePercentage} />
                : <Notification message="There is no feedback"/>}
              </Section>
        )
    }
}



export default App;

*/