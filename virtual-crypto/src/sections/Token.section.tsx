import React, { useState } from "react";
import styled from "styled-components";
import { LayoutComponent } from "../components/Layout.component";
import { CARDS } from "../consts/constants";

export const TokenSection = () => {
  const [tab, setTab] = useState<string>("1");
  return (
    <LayoutComponent>
      <CustomSection>
        <div className="titles">
          <article className="title-list">
            {CARDS.map(({ id, title }) => (
              <div key={id} className="title" onClick={() => setTab(id)}>
                {title}
              </div>
            ))}
          </article>
          <article className="card-grid">
            {CARDS[parseInt(tab) - 1].avatars.map(
              ({ id, name, image, rarity }) => (
                <article key={id} className="cards">
                  <div className="card">
                    <img src={image} alt={name} className="avatar" />
                    <p className="name">{name}</p>
                    <p className="rarity">{`Rarity: ${rarity}`}</p>
                  </div>
                </article>
              )
            )}
          </article>
        </div>
      </CustomSection>
    </LayoutComponent>
  );
};

const CustomSection = styled.article`
  .titles {
    .title-list {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 8rem;

      .title {
        cursor: pointer;
        border-radius: 5px;
        background-color: var(--main-white);
        color: var(--main-yellow);
        padding: 0.5rem 1.5rem;
        font-family: var(--main-font);
        text-transform: uppercase;
        font-weight: 600;
        box-shadow: 0 0 20px -2px #fbbe35;
      }
    }

    .card-grid {
      display: grid;
      grid-template-columns: 25% 25% 25% 25%;
      grid-gap: 50px 0;
      text-align: center;
      .cards {
        cursor: pointer;
        transition: 0.3s all ease;
        &:hover {
          transform: scale(1.2);
        }
        .rarity {
          color: var(--main-yellow);
          font-weight: 700;
        }
      }
    }
  }
`;
