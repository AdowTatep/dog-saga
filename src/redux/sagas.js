import { watcherSaga } from './modules/dog/sagas';

const sagas = {
  run: sagaMiddleware => {
    sagaMiddleware.run(watcherSaga);
  }
};

export default sagas;
