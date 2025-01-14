<template>
    <div class="blurred-box p-5">
        <div class="row ml-0 mr-0 p-3">
            <div class="col-12 mb-4 text-center">
                
                <img src="" alt="">
                <FormsInput 
                    label="صورة المتجر" 
                    type="file" 
                />
         
            </div>
            <div class="col-xl-6 col-sm-12 mb-3">
                <FormsInput label="اسم المتجر" placeholder="أدخل اسم المتجر" v-model="store.name" required/>
            </div>
            <div class="col-xl-6 col-sm-12 mb-3">
                <FormsInput label="عنوان المتجر" placeholder="أدخل عنوان المتجر" v-model="store.address" />
            </div>
            <div class="col-xl-6 col-sm-12 mb-3">
                <FormsInput label="رقم الهاتف" placeholder="أدخل رقم الهاتف" v-model="store.phone" />
            </div>
            <div class="col-xl-6 col-sm-12 mb-3">
                <FormsInput label="رابط فيسبوك" placeholder="أدخل رابط فيسبوك" v-model="store.facebook" />
            </div>
            <div class="col-xl-6 col-sm-12 mb-3">
                <FormsInput label="رابط إنستجرام" placeholder="أدخل رابط إنستجرام" v-model="store.instagram" />
            </div>
            <div class="col-xl-6 col-sm-12 mb-3">
                <FormsInput label="رابط تويتر" placeholder="أدخل رابط تويتر" v-model="store.twitter" />
            </div>

            <div class="col-12 text-center">
                <SubmitButton @click="saveStoreInfo()">حفظ البيانات</SubmitButton>
            </div>
        </div>
    </div>
</template>

<script>
import SubmitButton from '@/components/buttons/submitButton.vue';
import FormsInput from '@/components/forms/FormsInput.vue';
import Api from '@/plugins/Api';

export default {
    components:{
        FormsInput,
        SubmitButton
    },
    data() {
        return {
            store: {
                name: '',
                address: '',
                phone: '',
                facebook: '',
                instagram: '',
                twitter: '',
                image: null
            }
        };
    },
    mounted(){
        this.get();
    },
    methods: {
        async get(){
            var res=await Api.get('/sstore/branch/get',{});
            res.branchId=res.id; // this for api needed pram
            this.store=res;
        },
        onImageChange(event) {
            this.store.image = event.target.files[0]; // Capture the uploaded image file
        },
        async saveStoreInfo() {
          await Api.put('/sstore/branch/update',this.store);
        }
    }
};
</script>