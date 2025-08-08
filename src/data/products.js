const products = [
  {
    id: 1,
    title: "Combo – Both Group book",
    Lit_price: 1001,
    Essential_price: 8001,
    Pro_price: 15001,
    description:
      "Get your basics tested for the stepping stones of CA journey. Get all 4 reviewers and practice exam grade questions.",
    tag: "Recommended",
    offer: "Use code COMBO during checkout to get 17% off!",
    image: "/Images/Books/Both Group books.jpg",
    lite_shop_path:
      "https://pages.razorpay.com/stores/st_R2NAf1qLQOhkt4/product/li_R2NAf3OZvVXCg5",
    essential_shop_path:
      "https://pages.razorpay.com/stores/st_R2NAf1qLQOhkt4/product/li_R2NAf6kM7YJL9w",
    keyName: "ugbwew40nkja",
  },
  {
    id: 2,
    title: "Combo - Group 1 Books",
    Lit_price: 501,
    Essential_price: 4001,
    Pro_price: 7501,
    description:
      "Master the language of business! From basics to company accounts, practice questions and get familiar with Accounting Standards.",
    bulletPoints: [
      "1100+ questions",
      "ICAI SM questions",
      "RTPs, MTPs and PYPs",
    ],
    lite_shop_path:
      "https://pages.razorpay.com/stores/st_R2NAf1qLQOhkt4/product/li_R2NAf3fsdfH6Tj",
    essential_shop_path:
      "https://pages.razorpay.com/stores/st_R2NAf1qLQOhkt4/product/li_R2NAf7QBe2ky1P",
    image: "/Images/Books/Group 1 books.jpg",
    keyName: "iupqbaewf89a",
  },
  {
    id: 3,
    title: "Combo - Group 2 Books",
    Lite_price: 501,
    Essential_price: 4001,
    Pro_price: 7501,
    description:
      "Understand how laws shape business decisions. Practice theory questions and learn to write answers using the right legal language.",
    bulletPoints: [
      "1400+ questions",
      "ICAI SM questions",
      "RTPs, MTPs and PYPs",
    ],
    lite_shop_path:
      "https://pages.razorpay.com/stores/st_R2NAf1qLQOhkt4/product/li_R2NAf3yxEpooR0",
    essential_shop_path:
      "https://pages.razorpay.com/stores/st_R2NAf1qLQOhkt4/product/li_R2NAf7jOiMCImm",
    image: "/Images/Books/Group 1 combo.jpg",
    keyName: "nakenwubksaj",
  },
  {
    id: 4,
    title: "Advanced Accounting",
    Lite_price: 201,
    Essential_price: 1501,
    Pro_price: 3001,
    description:
      "Numbers, logic, and patterns! Sharpen your skills with MCQs – practice is the only key here.",
    bulletPoints: ["2200+ MCQs", "ICAI SM questions", "RTPs, MTPs and PYPs"],
    lite_shop_path:
      "https://pages.razorpay.com/stores/st_R2NAf1qLQOhkt4/product/li_R2NAf4HTExoCQ6",
    essential_shop_path:
      "https://pages.razorpay.com/stores/st_R2NAf1qLQOhkt4/product/li_R2NAf83Pmj4gFb",
    image: "/Images/Books/advanced accounting.jpg",
    keyName: "afniauhowinf",
  },
  {
    id: 5,
    title: "Corporate and Other Laws",
    Lit_price: 201,
    Essential_price: 1501,
    Pro_price: 3001,
    description:
      "Numbers, logic, and patterns! Sharpen your skills with MCQs – practice is the only key here.",
    bulletPoints: ["2200+ MCQs", "ICAI SM questions", "RTPs, MTPs and PYPs"],
    lite_shop_path:
      "https://pages.razorpay.com/stores/st_R2NAf1qLQOhkt4/product/li_R2NAf4WvCLmAvn",
    essential_shop_path:
      "https://pages.razorpay.com/stores/st_R2NAf1qLQOhkt4/product/li_R2NAf8MG5v0Q6Z",
    image: "/Images/Books/corporate and other laws.jpg",
    keyName: "hekxheowgfos",
  },
  {
    id: 6,
    title: "Taxation",
    tag: "Recommended",
    Lit_price: 201,
    Essential_price: 1501,
    Pro_price: 3001,
    description:
      "Numbers, logic, and patterns! Sharpen your skills with MCQs – practice is the only key here.",
    bulletPoints: ["2200+ MCQs", "ICAI SM questions", "RTPs, MTPs and PYPs"],
    lite_shop_path:
      "https://pages.razorpay.com/stores/st_R2NAf1qLQOhkt4/product/li_R2NAf4n4uMkepg",
    essential_shop_path:
      "https://pages.razorpay.com/stores/st_R2NAf1qLQOhkt4/product/li_R2NAf8dgVM8Tap",
    image: "/Images/Books/direct taxation.jpg",
    keyName: "afniauhowinf",
  },
  {
    id: 7,
    title: "Cost and Management Acccounting ",
    tag: "Recommended",
    Lit_price: 201,
    Essential_price: 1501,
    Pro_price: 3001,
    description:
      "Numbers, logic, and patterns! Sharpen your skills with MCQs – practice is the only key here.",
    bulletPoints: ["2200+ MCQs", "ICAI SM questions", "RTPs, MTPs and PYPs"],
    lite_shop_path:
      "https://pages.razorpay.com/stores/st_R2NAf1qLQOhkt4/product/li_R2NAf53xcEYEcu",
    essential_shop_path:
      "https://pages.razorpay.com/stores/st_R2NAf1qLQOhkt4/product/li_R2NAf8vZhAGbDC",
    image: "/Images/Books/cost and management accounting.jpg",
    keyName: "afniauhowinf",
  },
  {
    id: 8,
    title: "Auditing and Ethics",
    tag: "Recommended",
    Lit_price: 201,
    Essential_price: 1501,
    Pro_price: 3001,
    description:
      "Numbers, logic, and patterns! Sharpen your skills with MCQs – practice is the only key here.",
    bulletPoints: ["2200+ MCQs", "ICAI SM questions", "RTPs, MTPs and PYPs"],
    lite_shop_path:
      "https://pages.razorpay.com/stores/st_R2NAf1qLQOhkt4/product/li_R2NAf5L0Ty0Ezb",
    essential_shop_path:
      "https://pages.razorpay.com/stores/st_R2NAf1qLQOhkt4/product/li_R2NAf9EJMY4g6L",
    image: "/Images/Books/auditing and ethics.jpg",
    keyName: "afniauhowinf",
  },
  {
    id: 9,
    title: "Financial and Strategic Management",
    tag: "Recommended",
    Lit_price: 201,
    Essential_price: 1501,
    Pro_price: 3001,
    description:
      "Numbers, logic, and patterns! Sharpen your skills with MCQs – practice is the only key here.",
    bulletPoints: ["2200+ MCQs", "ICAI SM questions", "RTPs, MTPs and PYPs"],
    lite_shop_path:
      "https://pages.razorpay.com/stores/st_R2NAf1qLQOhkt4/product/li_R2NAf5cv2S9LkR",
    essential_shop_path:
      "https://pages.razorpay.com/stores/st_R2NAf1qLQOhkt4/product/li_R2NAf9ZDDaa2qT",
    image: "/Images/Books/financial management.jpg",
    keyName: "afniauhowinf",
  },
];

export default products;
