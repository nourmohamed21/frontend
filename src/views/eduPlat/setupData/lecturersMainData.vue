<style>
label {
  color: #fff;
}
.dark-skin .table{
  /* color: #fff; */
  color: rgb(59, 58, 58) !important;
}
</style>
<template class="">
  <div id="setup" class="p-5" style="height: 90vh;overflow: auto;">
    <div class="container">

      <div>
        <!-- التابات هنا -->
        <div class="row">

          <div class="col">
            <!-- Table for Courses -->
            <div class="table-responsive mt-3 transparent-box">
              <table class="table ">
                <thead class=" ">
                  <tr>
                    <th>Code</th>
                    <th>Arabic Name</th>
                    <th>English Name</th>
                    <th>
                      <button class="btn btn-primary btn-sm " @click="addCourseRow">
                        <i class="fa fa-plus"></i>
                      </button>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(course, index) in courses" :key="index">
                    <td>
                      <input type="text" class="form-control blurred-box shadow-none" v-model="course.code" />
                    </td>
                    <td>
                      <input type="text" class="form-control blurred-box shadow-none" v-model="course.arabicName" />
                    </td>
                    <td>
                      <input type="text" class="form-control blurred-box shadow-none" v-model="course.englishName" />
                    </td>
                    <td>
                      <button class="btn btn-danger btn-sm" @click="removeCourseRow(index)">
                        <i class="fa fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>


          </div>
          <div class="col">
            <!-- Table for Grades -->
            <div class="table-responsive mt-3 transparent-box">
              <table class="table table-hover">
                <thead class=" ">
                  <tr>
                    <th>Code</th>
                    <th>Grade Arabic Name</th>
                    <th>Grade English Name</th>
                    <th>Amount</th>
                    <th>Session No</th>
                    <th>
                      <button class="btn btn-primary btn-sm" @click="addGradeRow">
                        <i class="fa fa-plus"></i>
                      </button>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(grade, index) in grades" :key="index">
                    <td>
                      <input type="text" class="form-control blurred-box shadow-none" v-model="grade.code" />
                    </td>
                    <td>
                      <input type="text" class="form-control blurred-box shadow-none" v-model="grade.gradeArabic" />
                    </td>
                    <td>
                      <input type="text" class="form-control blurred-box shadow-none" v-model="grade.gradeEnglish" />
                    </td>
                    <td>
                      <input type="text" class="form-control blurred-box shadow-none" v-model="grade.amount" />
                    </td>
                    <td>
                      <input type="text" class="form-control blurred-box shadow-none" v-model="grade.sessionNo" />
                    </td>
                    <td>
                      <button class="btn btn-danger btn-sm" @click="removeGradeRow(index)">
                        <i class="fa fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <br>
        <br>
        <div>
          <div class="container">
            <!-- Form Section -->
            <div class="row mb-3">
              <div class="col-md-12">
                <!-- Main Data Section -->
                <div class="">
                  <div class="text-light ">Main Data</div>
                  <div class="-body">
                    <div class="form-row">
                      <div class="form-group col-md-2">
                        <input type="text" class="form-control blurred-box shadow-none" placeholder="الاسم الاول" />
                      </div>
                      <div class="form-group col-md-2">
                        <input type="text" class="form-control blurred-box shadow-none" placeholder="الاسم الثاني" />
                      </div>
                      <div class="form-group col-md-2">
                        <input type="text" class="form-control blurred-box shadow-none" placeholder="الاسم الثالث" />
                      </div>
                      <div class="form-group col-md-2">
                        <input type="text" class="form-control blurred-box shadow-none" placeholder="الاسم الرابع" />
                      </div>
                      <div class="form-group col-md-2">
                        <input type="text" class="form-control blurred-box shadow-none" placeholder="First Name" />
                      </div>
                      <div class="form-group col-md-2">
                        <input type="text" class="form-control blurred-box shadow-none" placeholder="Second Name" />
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Other Data Section -->
                <div class=" blurred-box mt-5 p-3">
                  <div class="text-light ">
                    Other Data
                  </div>
                  <div class="-body">
                    <div class="form-row">
                      <div class="form-group col-md-3">
                        <label>ID Number</label>
                        <input type="text" class="form-control blurred-box shadow-none" v-model="form.idNumber" />
                      </div>
                      <div class="form-group col-md-3">
                        <label>Address</label>
                        <input type="text" class="form-control blurred-box shadow-none" v-model="form.address" />
                      </div>
                      <div class="form-group col-md-3">
                        <label>Telephone No</label>
                        <input type="text" class="form-control blurred-box shadow-none" v-model="form.telephoneNo" />
                      </div>
                      <div class="form-group col-md-3">
                        <label>Qualification</label>
                        <select class="form-control blurred-box shadow-none" v-model="form.qualification">
                          <option value="">Select</option>
                          <option value="Bachelor">Bachelor</option>
                          <option value="Master">Master</option>
                          <option value="PhD">PhD</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br>
            <!-- Search Input -->
            <div class="row mb-3">
              <div class="col-md-12">
                <FormsSearchInput :modelValue="selectedTab"></FormsSearchInput>
              </div>
            </div>

            <!-- Data Table -->
            <div class="table-responsive transparent-box">
              <table class="table ">
                <thead class=" ">
                  <tr>
                    <th>Code</th>
                    <th>Arabic Name</th>
                    <th>English Name</th>
                    <th>Address</th>
                    <th>Mobile No.</th>
                    <th>ID Number</th>
                    <th>Qualification</th>
                    <th>Edit</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(lecturer, index) in filteredLecturers" :key="index">
                    <td>{{ lecturer.code }}</td>
                    <td>{{ lecturer.arabicName }}</td>
                    <td>{{ lecturer.englishName }}</td>
                    <td>{{ lecturer.address }}</td>
                    <td>{{ lecturer.mobileNo }}</td>
                    <td>{{ lecturer.idNumber }}</td>
                    <td>{{ lecturer.qualification }}</td>
                    <td>
                      <button class="btn btn-outline-primary btn-sm">
                        <i class="fa fa-edit"></i>
                      </button>
                    </td>
                    <td>
                      <input type="checkbox" v-model="lecturer.status" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Pagination -->
            <nav aria-label="Page navigation">
              <ul class="pagination">
                <li class="page-item" :class="{ disabled: currentPage === 1 }">
                  <a class="page-link blurred-box" href="#" @click.prevent="changePage(currentPage - 1)">Previous</a>
                </li>
                <li v-for="page in totalPages" :key="page" class="page-item" :class="{ active: currentPage === page }">
                  <a class="page-link transparent-box" href="#" @click.prevent="changePage(page)">{{ page }}</a>
                </li>
                <li class="page-item " :class="{ disabled: currentPage === totalPages }">
                  <a class="page-link blurred-box" href="#" @click.prevent="changePage(currentPage + 1)">Next</a>
                </li>
              </ul>
            </nav>

          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
import FormsSearchInput from '@/components/forms/FormsSearchInput.vue';
import { Success } from '@/plugins/Alert';

export default {
  name: 'lecturersMainData',
  el: "#setup",
  components:{
    FormsSearchInput
  },  
  data() {
    return {
      selectedTab: null,
      courses: [],
      grades: [

      ],
      form: {
      
      },
      searchQuery: "",
      lecturers: [
       
      ],
      currentPage: 1,
      itemsPerPage: 5,
      items: [
        // بيانات افتراضية
      ],
    };
  },
  computed: {
    filteredLecturers() {
      let search = this.searchQuery.toLowerCase();
      return this.lecturers
        .filter((lecturer) => {
          return (
            lecturer.arabicName.toLowerCase().includes(search) ||
            lecturer.englishName.toLowerCase().includes(search) ||
            lecturer.idNumber.includes(search)
          );
        })
        .slice(this.startIndex, this.endIndex);
    },
    totalPages() {
      return Math.ceil(this.lecturers.length / this.itemsPerPage);
    },
    startIndex() {
      return (this.currentPage - 1) * this.itemsPerPage;
    },
    endIndex() {
      return this.startIndex + this.itemsPerPage;
    },
  },
  methods: {
    addCourseRow() {
      this.courses.push({ code: "", arabicName: "", englishName: "" });
    },
    removeCourseRow(index) {
      this.courses.splice(index, 1);
    },
    addGradeRow() {
      this.grades.push({
        code: "",
        gradeArabic: "",
        gradeEnglish: "",
        amount: "",
        sessionNo: "",
      });
    },
    removeGradeRow(index) {
      this.grades.splice(index, 1);
    },
    navClasses(name) {
      if (name == this.selectedTab) {
        return "nav-link active";
      }
      return "nav-link";
    },
    changePage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
    saveData() {
      // Logic to save data
      Success("Data saved!");
    },
    addLecturer() {
      this.lecturers.push({
        code: "",
        arabicName: "",
        englishName: "",
        address: "",
        mobileNo: "",
        idNumber: "",
        qualification: "",
        status: false,
      });
    },
    addItem() {
      // إضافة سجل جديد
    },
    deleteItem() {
      // حذف سجل
    },
  },
};
</script>