import React from "react";
import User from "./user.png";

const CV1 = () => {
  return (
    <div className="mx-auto" style={{ width: "60%" }}>
      <div className="row d-flex flex-row">
        <div className="col-lg-8 my-5">
          <h3 className="fs-1 mt-2 text-info ">SAHIL SAMBYAL</h3>
          <hr className="mb-5 fw-bold" />

          <section>
            <div className="d-flex flex-col">
              <p className="fs-3 fw-bold">EXPERIENCE</p>
              <span className="bg-info w-100 ml-2 py-1">&nbsp;</span>
            </div>
            <div className="text-dark">
              <p className="fs-6">
                <strong>Retail Sales Associate, 02/2017 - Current</strong>
                <br />
                <strong>ZARA - New Delhi, India</strong>
              </p>

              <ul className="my-1">
                <li>
                  <p className="fs-18">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ad, doloremque. Sit quis consectetur inventore id. Quod
                    nesciunt iste error sint, illo ipsa iusto nam cumque odio
                    quia sequi perferendis, quibusdam sit dolor labore
                    repudiandae laboriosam officiis! Asperiores et tempora
                    distinctio recusandae accusantium vero rem inventore,
                    accusamus magni eius ipsam exercitationem!
                  </p>
                </li>
                <li>
                  <p className="fs-18">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ad, doloremque. Sit quis consectetur inventore id. Quod
                    nesciunt iste error sint, illo ipsa iusto nam cumque odio
                    quia sequi perferendis, quibusdam sit dolor labore
                    repudiandae laboriosam officiis! Asperiores et tempora
                    distinctio recusandae accusantium vero rem inventore,
                    accusamus magni eius ipsam exercitationem!
                  </p>
                </li>
                <li>
                  <p className="fs-18">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ad, doloremque. Sit quis consectetur inventore id. Quod
                    nesciunt iste error sint, illo ipsa iusto nam cumque odio
                    quia sequi perferendis, quibusdam sit dolor labore
                    repudiandae laboriosam officiis! Asperiores et tempora
                    distinctio recusandae accusantium vero rem inventore,
                    accusamus magni eius ipsam exercitationem!
                  </p>
                </li>
              </ul>

              <hr
                className="mb-5"
                style={{ height: "3px", background: "black" }}
              />
            </div>
          </section>

          <section>
            <div className="d-flex flex-col">
              <p className="fs-3 fw-bold">EDUCATION</p>
              <span className="bg-info w-100 ml-2 py-1">&nbsp;</span>
            </div>
            <div className="text-dark">
              <p>
                <strong>Diploma in Financial Accounting, 2016 </strong>
                <br />
                <strong>
                  Oxford Software Institute & Oxford School of English
                </strong>
                - New Delhi, India
              </p>

              <hr
                className="mb-5"
                style={{ height: "3px", background: "black" }}
              />
            </div>
          </section>

          <section>
            <div className="d-flex flex-col">
              <p className="fs-22 fw-bold w-full px-2">INTERESTS AND HOBBIES</p>
              <span className="bg-info flex-grow-1  py-1">&nbsp;</span>
            </div>
            <div className="text-dark">
              <p>Recreational Footbal League</p>
              <li>Team Captain</li>
              <li>Two-time league champion</li>
              <p>Red Cross Volunteer</p>
              <li>
                Tought classes in lifesaving skills including: CPR, First Aid
              </li>
            </div>
          </section>
        </div>

        <div className="col-lg-4 mt-5  border-left border-   bg-info  ">
          <div className="d-flex align-content-center mt-4 ">
            <img
              className="mx-auto "
              src={User}
              alt="user"
              height={300}
              width={300}
            />
          </div>

          <p className=" fs-2  mt-5 text-dark fw-bold ">CONTACT</p>

          <hr style={{ height: "4px", width: "100%" }} />
          <div className="ml-3">
            <li className="text-dark ">
              Address:
              <span className="fw-bold w-full"> ZARA - New Delhi</span>
            </li>
            <br />
            <li className="text-dark">
              Phone:
              <span className="fw-bold w-full"> 233645676</span>
            </li>
            <br />
            <li className="text-dark">
              Email:
              <span className="fw-bold w-full"> d.example@gmaple.in</span>
            </li>
          </div>
          <hr className="mb-5" style={{ height: "3px", background: "black" }} />

          <div className="d-flex flex-col">
            <p className="fs-2 text-dark fw-bold ">SUMMARY</p>
            <span className="ml-2 ">&nbsp;</span>
          </div>
          <div className="text-dark">
            <p className="fs-18">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
              similique voluptatibus consequuntur facere dolores qua Id quam,
              voluptas, corporis dignissimos iusto repr tempora obcaecati vero
              cupiditate provident in velit officia sed esse quo quaerat nihil
              libero? Eum quae minima sint. Asperiores optio necessitatibus
              provident omnis odio, delectus ipsam vero placeat. Sunt
              repellendus, possimus consectetur saepe maiores iste nesciunt a
              autem dolo quae, delectus velit animi repellat perspiciatis nulla
              maxime molestias officia! Odio expedita, nulla rep excepturi
              numquam itaque architecto.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CV1;
