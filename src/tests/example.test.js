import React from 'react';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';
import Example from './example_components/example.js';

test('Для примера', () => {
  expect(2 + 2).toBe(4);
});

describe('Example testing', () => {
  it('Первый тест', () => {
    const component = renderer.create(<Example />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Второй тест', () => {
    const example = shallow(<Example />);
    const itm = example.find('#disabled');
    expect(itm.length).toBe(1);
  });

  it('Третий тест', () => {
    const example = shallow(<Example />);
    const itm = example.find('#disabled');
    expect(itm.contains(<div id="disabled">Для примера</div>))
      .toBe(true);
  });

  it('Четвертый тест', () => {
    const example = shallow(<Example />);
    expect(example.find('#disabled').length)
      .toBe(1);
  });

});
