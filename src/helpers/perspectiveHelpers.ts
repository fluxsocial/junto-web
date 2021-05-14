export function getChildren(id, perspectives) {
  return perspectives.filter((perspective) => perspective.parentId === id);
}

export function generateGroups(perspectives) {
  return perspectives.reduce((acc, perspective) => {
    const isGroup = perspective.type === 'group';
    return isGroup
      ? [
        ...acc,
        {
          ...perspective,
          children: getChildren(perspective.id, perspectives),
        },
      ]
      : acc;
  }, []);
}
