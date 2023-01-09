import PropTypes from 'prop-types';
import { Button } from 'components/FeedbackOptions/FeedbackOptions.styled';
export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return options.map(option => (
    <Button
      style={{
        backgroundColor: getRandomColor(),
      }}
      key={option}
      onClick={() => {
        onLeaveFeedback(option);
      }}
    >
      {ucFirst(option)}
    </Button>
  ));
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

function ucFirst(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
