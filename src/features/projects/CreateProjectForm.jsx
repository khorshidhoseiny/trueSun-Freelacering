import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import RHFSelect from "../../ui/RHFSelect";
import { TagsInput } from "react-tag-input-component";
import { useState } from "react";
import DatePickerField from "../../ui/DatePickerField";
import useCategory from "../../hooks/useCategory";
import useCreateProject from "./useCreateProject";
import useEditProject from "./useEditProject";
import Loading from "../../ui/Loading";
function CreateProjectForm({ onClose, projectToEdit = {} }) {
  const { _id: editId } = projectToEdit;
  const isEditSession = Boolean(editId);

  const {
    title,
    description,
    deadline,
    budget,
    category,
    tags: prevTags,
  } = projectToEdit;
  let editValues = {};

  if (isEditSession) {
    editValues = {
      title,
      description,
      budget,
      category: category._id,
    };
  }
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues: editValues });

  const [tags, setTags] = useState(prevTags || []);
  const [date, setDate] = useState(new Date(deadline || ""));
  const { Categories } = useCategory();
  const { createProject, isCreating } = useCreateProject();
  const { EditProject, isEditing } = useEditProject();

  const OnSubmit = (data) => {
    const newProject = {
      ...data,
      deadline: new Date(date).toISOString(),
      tags,
    };
    if (isEditSession) {
      EditProject(
        { id: editId, newProject },
        {
          onSuccess: () => {
            onClose();
            reset();
          },
        }
      );
    } else {
      createProject(newProject, {
        onSuccess: () => {
          onClose();
          reset();
        },
      });
    }
  };

  return (
    <form className="space-y-8" onSubmit={handleSubmit(OnSubmit)}>
      <TextField
        label="عنوان"
        register={register}
        required
        name="title"
        type="text"
        validationSchema={{
          required: "وارد کردن عنوان ضروری است",
          minLength: {
            value: 10,
            message: "حداقل 10 کاراکتر را وارد کنید",
          },
        }}
        errors={errors}
      />
      <TextField
        label="توضیحات"
        register={register}
        required
        name="description"
        type="text"
        validationSchema={{
          required: "وارد کردن توضیحات ضروری است",
          minLength: {
            value: 15,
            message: "حداقل 15 کاراکتر را وارد کنید",
          },
        }}
        errors={errors}
      />
      <TextField
        label="بودجه"
        register={register}
        required
        name="budget"
        type="number"
        validationSchema={{
          required: "وارد کردن بودجه ضروری است",
        }}
        errors={errors}
      />
      <RHFSelect
        label="دسته بندی"
        register={register}
        required
        name="category"
        options={Categories}
      />
      <div>
        <label className="mb-2 block text-secondary-700">تگ</label>
        <TagsInput value={tags} onChange={setTags} name="tags" />
      </div>
      <DatePickerField date={date} setDate={setDate} lable="ددلاین" />
      <div className="!mt-8">
        {isCreating || isEditing ? (
          <Loading />
        ) : (
          <button type="submit" className="btn w-full btn--primary ">
            ارسال
          </button>
        )}
      </div>
    </form>
  );
}
export default CreateProjectForm;
