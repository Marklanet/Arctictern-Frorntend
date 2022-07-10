import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Back from "../../../components/reusable/back/Back3";
import { singleserice } from "./singleServiceData";
import { useParams } from "react-router";
import "./singleservice.css";
import img from "../../../images/contactus.png";
import Quicklinks from "../../../components/reusable/quicklinks/Quicklinks";
const Singleservice = () => {
  const { id } = useParams();
  const [service, setService] = useState({});
  const [relatedService, setRelatedService] = useState([]);
  let navigate = useNavigate();
  useEffect(() => {
    let service = singleserice.find(
      (service) => service.path === `/services/${id}`
    );
    if (service) {
      setService(service);
      setRelatedService(service.related);
    }
  }, [id]);

  const handleRelated = (num) => {
    const relatedpath = relatedService[num].split(" ").join("-");
    console.log(relatedpath);

    navigate(`/services/${relatedpath}`, { replace: true });
  };

  return (
    <>
      <section className="singleservice">
        <Back
          name="Let Arctictern Writers Handle Your"
          title={service.name}
          cover={img}
          description={service.description}
        />
        <div className="container mb">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            deserunt minus sunt repellat aliquam. Provident porro consequatur
            excepturi. Nobis cum modi ipsa architecto ex molestiae velit nemo
            obcaecati enim debitis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Recusandae deserunt minus sunt repellat aliquam.
            Provident porro consequatur excepturi. Nobis cum modi ipsa
            architecto ex molestiae velit nemo obcaecati enim debitis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            deserunt minus sunt repellat aliquam. Provident porro consequatur
            excepturi. Nobis cum modi ipsa architecto ex molestiae velit nemo
            obcaecati enim debitis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Recusandae deserunt minus sunt repellat aliquam.
            Provident porro consequatur excepturi. Nobis cum modi ipsa
            architecto ex molestiae velit nemo obcaecati enim debitis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            deserunt minus sunt repellat aliquam. Provident porro consequatur
            excepturi. Nobis cum modi ipsa architecto ex molestiae velit nemo
            obcaecati enim debitis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Recusandae deserunt minus sunt repellat aliquam.
            Provident porro consequatur excepturi. Nobis cum modi ipsa
            architecto ex molestiae velit nemo obcaecati enim debitis.
          </p>
          <div className="mb d_flex chinnii mt4">
            <div className="quickss">
              <Quicklinks />
            </div>
            <div className="wrd">
              <h1>Related to {service.name}</h1>
              <div className="flexwrap creative">
                <div>
                  <span>{relatedService[0]}</span>
                  <li className="discount boxshadow3">
                    up to 40% special discount
                  </li>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleRelated(0);
                    }}
                  >
                    Explore
                  </button>
                </div>
                <div>
                  <span>{relatedService[1]}</span>
                  <li className="discount boxshadow3">
                    up to 30% special discount
                  </li>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleRelated(1);
                    }}
                  >
                    Explore
                  </button>
                </div>
                <div>
                  <span>{relatedService[2]}</span>
                  <li className="discount boxshadow3">
                    up to 50% special discount
                  </li>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleRelated(2);
                    }}
                  >
                    Explore
                  </button>
                </div>
              </div>
              <p>
                At arctictern writers , we focus on delivering only high quality
                and best content, we ensure we give our client the best of the
                best Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae deserunt minus sunt repellat aliquam. Provident porro
                consequatur excepturi. Nobis cum modi ipsa architecto ex
                molestiae velit nemo obcaecati enim debitis.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Singleservice;
