import IntroScroll from "../components/IntroScroll";

const paragraphs = [
  {
    title: "Test",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan lacus vel facilisis volutpat. Pellentesque pulvinar pellentesque habitant morbi tristique senectus. Nunc mattis enim ut tellus. Mauris vitae ultricies leo integer malesuada nunc vel. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Morbi tristique senectus et netus et malesuada. Nibh ipsum consequat nisl vel pretium lectus quam. Nunc sed velit dignissim sodales ut eu sem integer. Tortor pretium viverra suspendisse potenti nullam ac tortor. Lorem mollis aliquam ut porttitor leo a diam sollicitudin.",
  },
  {
    title: "Test2",
    body: "Fermentum iaculis eu non diam phasellus vestibulum lorem. Porta lorem mollis aliquam ut porttitor leo a diam. Vitae congue eu consequat ac felis donec. Vitae semper quis lectus nulla. Ut ornare lectus sit amet est placerat in. Ultricies tristique nulla aliquet enim tortor at auctor urna. Ut faucibus pulvinar elementum integer. Cursus mattis molestie a iaculis at. Ornare suspendisse sed nisi lacus sed. Nisl tincidunt eget nullam non nisi. Velit ut tortor pretium viverra suspendisse potenti nullam. At risus viverra adipiscing at in tellus.",
  },
  {
    title: "Test3",
    body: "Fermentum iaculis eu non diam phasellus vestibulum lorem. Porta lorem mollis aliquam ut porttitor leo a diam. Vitae congue eu consequat ac felis donec. Vitae semper quis lectus nulla. Ut ornare lectus sit amet est placerat in. Ultricies tristique nulla aliquet enim tortor at auctor urna. Ut faucibus pulvinar elementum integer. Cursus mattis molestie a iaculis at. Ornare suspendisse sed nisi lacus sed. Nisl tincidunt eget nullam non nisi. Velit ut tortor pretium viverra suspendisse potenti nullam. At risus viverra adipiscing at in tellus.",
  },
  {
    title: "Test2",
    body: "Fermentum iaculis eu non diam phasellus vestibulum lorem. Porta lorem mollis aliquam ut porttitor leo a diam. Vitae congue eu consequat ac felis donec. Vitae semper quis lectus nulla. Ut ornare lectus sit amet est placerat in. Ultricies tristique nulla aliquet enim tortor at auctor urna. Ut faucibus pulvinar elementum integer. Cursus mattis molestie a iaculis at. Ornare suspendisse sed nisi lacus sed. Nisl tincidunt eget nullam non nisi. Velit ut tortor pretium viverra suspendisse potenti nullam. At risus viverra adipiscing at in tellus.",
  },
];

function Home() {
  return (
    <div className="page">
      <IntroScroll>{paragraphs}</IntroScroll>
    </div>
  );
}

export default Home;
