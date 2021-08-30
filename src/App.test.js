import App from "./App";
import { shallow } from "enzyme";
import { findByTestAttribute, testStore } from "../src/Utils";

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store} />)
    .childAt(0)
    .dive();
  return wrapper;
};

describe("App Component", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      posts: [
        {
          title: "Example title",
          body: "Some text",
        },
        {
          title: "Example title-1",
          body: "Some text-1",
        },
        {
          title: "Example title-2",
          body: "Some text-2",
        },
      ],
    };
    wrapper = setUp(initialState);
  });
  it("Should render without errors", () => {
    const component = findByTestAttribute(wrapper, "appComponent");
    expect(component.length).toBe(1);
  });
});
