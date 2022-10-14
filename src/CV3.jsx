import React from "react";

const CV3 = () => {
  return (
    <div className="mx-auto" style={{ width: "70%" }}>
      <hr style={{ width: "100%", height: "4px", background: "black" }} />

      <div className=" d-flex row bg-info py-5">
        <h3 className="h3 text-center fs-1 fs-bold ">SAHIL Thakur</h3>
        <h6 className="text-center mt-5">
          Address:ZARA - New Delhi, India | Phone:233645676 |
          Email:d.example@gmaple.in
        </h6>
        <span className="d-none ">macbook</span>
      </div>

      <div className="row ">
        <div className=" my-5">
          <section>
            <hr style={{ width: "19%", height: "4px", background: "black" }} />

            <div className="d-flex flex-col ">
              <p className="fs-2 fw-bold text-primary">SUMMARY</p>
            </div>
            <div className="text-dark ">
              <p className="fs-18 w-100">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
                eius aperiam natus cumque nulla, fugiat accusantium velit, at
                similique voluptatibus consequuntur facere dolores quas labore?
                Id quam, voluptas, corporis dignissimos iusto reprehenderit
                tempora obcaecati vero cupiditate provident incidunt optio
                numquam totam, nam repellendus? Accusamus veniam quibusdam alias
                velit officia sed esse quo quaerat nihil libero? Eum quae minima
                sint. Asperiores optio necessitatibus provident omnis odio,
                delectus ipsam vero placeat. Sunt repellendus, possimus
                consectetur saepe maiores iste nesciunt a autem dolor adipisci
                quae, delectus velit animi repellat perspiciatis nulla maxime
                molestias officia! Odio expedita, nulla repellat praesentium
                excepturi numquam itaque architecto.
              </p>
            </div>
          </section>

          <section>
            <hr style={{ width: "19%", height: "4px", background: "black" }} />

            <div className="d-flex flex-col">
              <p className="fs-3 fw-bold text-primary">EXPERIENCE</p>
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
            </div>
          </section>

          <section>
            <hr style={{ width: "19%", height: "4px", background: "black" }} />

            <div className="d-flex flex-col">
              <p className="fs-3 fw-bold text-primary">EDUCATION</p>
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
            </div>
          </section>

          <section>
            <hr style={{ width: "19%", height: "4px", background: "black" }} />

            <div className="d-flex flex-col">
              <p className="fs-22 fw-bold w-full text-primary">
                INTERESTS AND HOBBIES
              </p>
            </div>
            <div className="text-dark">
              <p>Recreational Footbal League</p>
              <li>Team Captain</li>
              <li>Two-time league champion</li>
              <li>
                Tought classes in lifesaving skills including: CPR, First Aid
              </li>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
export default CV3;
