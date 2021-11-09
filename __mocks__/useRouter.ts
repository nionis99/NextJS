const useRouter = jest.spyOn(require('next/router'), 'useRouter');
useRouter.mockImplementation(() => ({ query: {}, push: jest.fn() }));

export default useRouter;
