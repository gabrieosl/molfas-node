import { ObjectID } from 'mongodb';

export default function isMongoIdValid(
  target: string | number | ObjectID,
): boolean {
  return ObjectID.isValid(target);
}
