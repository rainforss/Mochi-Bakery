import { StarFill, Star } from "react-bootstrap-icons";

const starGenerator = (value, onClick = null, hover = null) => {
  const stars = [];
  for (var i = 1; i < 6; i++) {
    if (value - i >= 0) {
      stars.push(
        <StarFill
          className="mx-1"
          name={i}
          onClick={onClick}
          style={hover ? { cursor: "pointer" } : {}}
        />
      );
    } else {
      stars.push(
        <Star
          className="mx-1"
          name={i}
          onClick={onClick}
          style={hover ? { cursor: "pointer" } : {}}
        />
      );
    }
  }
  return stars.map((star) => star);
};

export default starGenerator;
