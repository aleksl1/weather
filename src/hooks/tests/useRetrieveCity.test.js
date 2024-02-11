import { act } from 'react-test-renderer';
import useRetrieveCity from '../useRetrieveCity';
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import React from 'react';

jest.mock('@react-native-async-storage/async-storage', () => ({
  useAsyncStorage: jest.fn(() => ({
    getItem: jest.fn(),
  })),
}));

describe('useRetrieveCity', () => {
  beforeEach(() => {
    jest.spyOn(React, 'useEffect').mockImplementation(f => f());
  });

  it('calls getItem and updates city state if city is retrieved', async () => {
    const getItemMock = jest.fn().mockResolvedValue('New York');
    const setCityMock = jest.fn();

    useAsyncStorage.mockReturnValue({ getItem: getItemMock });

    await act(async () => {
      useRetrieveCity({
        setCity: setCityMock,
      });
    });

    expect(getItemMock).toHaveBeenCalledTimes(1);
    expect(setCityMock).toHaveBeenCalledWith('New York');
  });

  it('calls getItem and updates isInStorage state if city is retrieved', async () => {
    const getItemMock = jest.fn().mockResolvedValue('New York');
    const setIsInStorageMock = jest.fn();

    useAsyncStorage.mockReturnValue({ getItem: getItemMock });

    await act(async () => {
      useRetrieveCity({
        setIsInStorage: setIsInStorageMock,
      });
    });

    expect(getItemMock).toHaveBeenCalledTimes(1);
    expect(setIsInStorageMock).toHaveBeenCalledWith(true);
  });

  it('calls getItem and does not update city state if city was not retrievied', async () => {
    const getItemMock = jest.fn().mockResolvedValue(null);
    const setCityMock = jest.fn();

    useAsyncStorage.mockReturnValue({ getItem: getItemMock });

    await act(async () => {
      useRetrieveCity({
        setCity: setCityMock,
      });
    });
    expect(getItemMock).toHaveBeenCalledTimes(1);
    expect(setCityMock).not.toHaveBeenCalled();
  });

  it('calls getItem and does not update isInStorage state if city was not retrieved', async () => {
    const getItemMock = jest.fn().mockResolvedValue(null);
    const setIsInStorageMock = jest.fn();

    useAsyncStorage.mockReturnValue({ getItem: getItemMock });

    await act(async () => {
      useRetrieveCity({
        setIsInStorage: setIsInStorageMock,
      });
    });
    expect(getItemMock).toHaveBeenCalledTimes(1);
    expect(setIsInStorageMock).not.toHaveBeenCalled();
  });
});
