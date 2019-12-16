import React, { Component } from "react";
import { Row, Col } from "reactstrap";

import BookList from "./BookList";
import ActivityPanel from "./ActivityPanel";

export class index extends Component {
  state = {
    activityData: [
      "Carl has added a new book",
      "Mark has added a new book",
      "Mark has added a new book",
      "Mark has added a new book",
      "Mark has added a new book",
      "Mark has added a new book",
      "Mark has added a new book",
      "Mark has added a new book",
      "Mark has added a new book",
      "Mark has added a new book",
      "Mark has added a new book",
      "Mark has added a new book",
      "Mark has added a new book",
      "Mark has added a new book",
      "Mark has added a new book",
      "Mark has added a new book"
    ],
    bookData: [
      {
        id: "FAcd47fsl",
        title: "Movie Night",
        author: "Mark Twaine",
        price: "1099.50",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum fugiat inventore, corporis autem quos dolor est odio sequi ut officiis atque veritatis laboriosam. Reprehenderit quod reiciendis quae vitae obcaecati laudantium?Nostrum ullam provident temporibus maxime! Saepe quos architecto eveniet odio vitae laudantium, qui possimus est quasi vero magni modi atque numquam voluptates debitis similique iure expedita rerum assumenda necessitatibus animi!"
      },
      {
        id: "c78sdGk12",
        title: "Kilig!",
        author: "Seniora Santibanez",
        price: "99.50",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum fugiat inventore, corporis autem quos dolor est odio sequi ut officiis atque veritatis laboriosam. Reprehenderit quod reiciendis quae vitae obcaecati laudantium?Nostrum ullam provident temporibus maxime! Saepe quos architecto eveniet odio vitae laudantium, qui possimus est quasi vero magni modi atque numquam voluptates debitis similique iure expedita rerum assumenda necessitatibus animi!"
      },
      {
        id: "78789xDlls2",
        title: "Ayaw ko sayo tanga!",
        author: "Ahhh Ulol",
        price: "1599.50",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum fugiat inventore, corporis autem quos dolor est odio sequi ut officiis atque veritatis laboriosam. Reprehenderit quod reiciendis quae vitae obcaecati laudantium?Nostrum ullam provident temporibus maxime! Saepe quos architecto eveniet odio vitae laudantium, qui possimus est quasi vero magni modi atque numquam voluptates debitis similique iure expedita rerum assumenda necessitatibus animi!"
      }
    ]
  };

  render() {
    const { bookData, activityData } = this.state;
    if (!bookData) {
      return <div></div>;
    }
    return (
      <div>
        <Row>
          <Col sm={12} md={8}>
            <Row>
              <Col sm={12} md={{ size: 8, offset: 1 }}>
                <BookList datasource={bookData} />
              </Col>
            </Row>
          </Col>
          <Col sm={12} md={4}>
            <ActivityPanel datasource={activityData} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default index;
