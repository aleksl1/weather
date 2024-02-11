import { act } from 'react-test-renderer';
import useRetrieveCity from '../useRetrieveCity';
import React from 'react';

describe('useRetrieveCity', () => {
  jest.spyOn(React, 'useEffect').mockImplementation(f => f());
  
  it('calls getItem and if city is retrieved it updates city state', async () => {
    const getItemMock = jest.fn().mockResolvedValue('New York');
    const setCityMock = jest.fn();

    await act(async () => {
      useRetrieveCity({
        getItem: getItemMock,
        setCity: setCityMock,
      });
    });

    expect(getItemMock).toHaveBeenCalledTimes(1);
    expect(setCityMock).toHaveBeenCalledWith('New York');
  });

  it('calls getItem and if city is retrieved it updates isInStorage state', async () => {
    const getItemMock = jest.fn().mockResolvedValue('New York');
    const setIsInStorageMock = jest.fn();

    await act(async () => {
      useRetrieveCity({
        getItem: getItemMock,
        setIsInStorage: setIsInStorageMock,
      });
    });

    expect(getItemMock).toHaveBeenCalledTimes(1);
    expect(setIsInStorageMock).toHaveBeenCalledWith(true);
  });

  it('calls getItem and if city is not retrieved it does not update city state', async () => {
    const getItemMock = jest.fn().mockResolvedValue(null);
    const setCityMock = jest.fn();

    await act(async () => {
      useRetrieveCity({
        getItem: getItemMock,
        setCity: setCityMock,
      });
    });

    expect(setCityMock).not.toHaveBeenCalled();
  });

  it('calls getItem and if city is not retrieved it does not update isInStorage state', async () => {
    const getItemMock = jest.fn().mockResolvedValue(null);
    const setIsInStorageMock = jest.fn();

    await act(async () => {
      useRetrieveCity({
        getItem: getItemMock,
        setIsInStorage: setIsInStorageMock,
      });
    });

    expect(setIsInStorageMock).not.toHaveBeenCalled();
  });
});
