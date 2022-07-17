// npx sequelize-cli db:migrate
// npx sequelize-cli db:seed:all
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("card", [
      {
        title: "리그오브레전드 챌린저 찍기",
        cardtext: "챌린저 서포터나 정글 구합니다",
        background: "1",
        member: "1",
        completed: "1",
        share: "1",
        createdAt: new Date(),
        updatedAt: new Date(),
        users_id: 1,
      },
      //
      {
        title: "광산가서 보석 채광하기",
        cardtext: "능률 좋고 빠릿빠릿 일머리 좋으신분 같이해요",
        background: "2",
        member: "1",
        completed: "1",
        share: "1",
        createdAt: new Date(),
        updatedAt: new Date(),
        users_id: 2,
      },
      {
        title: "번지점프 하기",
        cardtext:
          "인간이 가장 공포를 느낀다는 11m에서 뛰어내릴 예정입니다. 장소는 논산에서 뵙겠습니다.",
        background: "3",
        member: "1",
        completed: "1",
        share: "1",
        createdAt: new Date(),
        updatedAt: new Date(),
        users_id: 3,
      },
      {
        title: "모히또 가서 몰디브 한잔",
        cardtext: "어이 검사양반",
        background: "4",
        member: "1",
        completed: "1",
        share: "1",
        createdAt: new Date(),
        updatedAt: new Date(),
        users_id: 4,
      },
      {
        title: "향고래 보러가기",
        cardtext:
          "기러기 스위스 별똥별 인도인 역삼역 우영우 거꾸로 읽어도 우영우.",
        background: "5",
        member: "1",
        completed: "1",
        share: "1",
        createdAt: new Date(),
        updatedAt: new Date(),
        users_id: 5,
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("cards", null, {});
  },
};
