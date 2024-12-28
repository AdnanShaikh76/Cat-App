import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { getcatdetails } from "../API";
import { useNavigate } from "react-router";

const CatCard = ({}) => {
  const [catdetails, setcatdetails] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchcatdetails = async () => {
      const data = await getcatdetails();
      setcatdetails(data);
    };
    fetchcatdetails();
  }, []);

  const handleClick = (id) => {
    navigate(`/cats/${id}`); // Maan lete hain cat ke paas id hai
  };

  return (
    <>
      <div className="container text-center">
        <div className="row">
          {catdetails.map((e) => (
            <Card
              key={e.url}
              style={{
                width: "18rem",
                position: "relative",
                margin: "10px",
                padding: "10px 15px",
                boxShadow:
                  " 0px 10px 15px -3px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1)",
                cursor: "pointer",
              }}
            >
              <h2>{e.id}</h2>
              <Card.Img
                variant="top"
                src={e.url}
                style={{
                  borderRadius: "5px",
                  width: "100%",
                  height: "70%",
                  objectFit: "cover",
                }}
              />
              <Card.Body>
                <Button
                  onClick={() => handleClick(e.id)}
                  variant="primary"
                >
                  More Details
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default CatCard;
