import { useState } from 'react';
import { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const countTotalFeedback = () => {
    const total = feedback.good + feedback.neutral + feedback.bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const value = Math.round((feedback.good / countTotalFeedback()) * 100);
    if (!value) {
      return 0;
    }
    return value;
  };

  const onLeaveFeedback = options => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [options]: prevFeedback[options] + 1,
    }));
  };

  const totalFeedback = countTotalFeedback();
  const positiveFeedbackPercentage = countPositiveFeedbackPercentage();

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          onLeaveFeedback={onLeaveFeedback}
          options={Object.keys(feedback)}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={totalFeedback}
            positivePercentage={positiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};
