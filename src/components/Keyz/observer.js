export const ObserverFunc = (stateList) => {
  const observerList = stateList.map((element) => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        element.state(entry.isIntersecting);
      },
      { threshold: element.threshold ? element.threshold : 0.1 }
    );
    return { observer, ref: element.ref };
  });

  //   creating the observer
  observerList.forEach((observerItem) => {
    if (observerItem.ref.current) {
      observerItem.observer.observe(observerItem.ref.current);
    }
  });
  // unsubscribting the observer
  return () => {
    observerList.forEach((observerItem) => {
      if (observerItem.ref.current) {
        observerItem.observer.unobserve(observerItem.ref.current);
      }
    });
  };
};
